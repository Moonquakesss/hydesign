import classNames from "classnames"
import React, { createContext, useState } from "react";
import { MenuItemProps } from './menuItem'

type Mode = 'horizontal' | 'vertical'

type selectedCallBack = (selectedIndex: number) => void;

export interface MenuProps {
  defaultIndex?: number;
  className?: string;
  mode?: Mode;
  style?: React.CSSProperties;
  onSelect?: selectedCallBack;
}

export interface IMenuContext {
  index: number;
  onSelect?: selectedCallBack;
}

export const MenuContext = createContext<IMenuContext>({ index: 0 })

const Menu: React.FC<MenuProps> = (props) => {
  const { className, style, mode, defaultIndex, onSelect, children } = props
  const [currentActive, setCurrentActive] = useState(defaultIndex)
  const classes = classNames(className, 'hydesign-menu', {
    'menu-vertical': mode === 'vertical'
  })
  const handleClick = (index: number) => {
    setCurrentActive(index)
    onSelect && onSelect(index)
  }
  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : 0,
    onSelect: handleClick,
  }
  const renderChildren = () => {
    return React.Children.map(children, (child: any, index: number) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>
      if (childElement.type.displayName === 'menu-item') {
        return React.cloneElement(child, { index })
      } else {
        console.error('Warning: Menu有一个child不属于MenuItem！')
      }
    })
  }
  return (
    <>
      <MenuContext.Provider value={passedContext}>
        <ul className={classes} style={style} data-testid="test-menu">
          {renderChildren()}
        </ul>
      </MenuContext.Provider>
    </>
  )
}

Menu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizontal'
}

export default Menu
