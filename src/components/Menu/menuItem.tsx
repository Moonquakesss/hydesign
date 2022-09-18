import classNames from "classnames"
import React, { useContext } from "react"
import { MenuContext } from "./menu";

export interface MenuItemProps {
  index: number;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { index, disabled, className, style, children } = props

  const context = useContext(MenuContext)

  const handleClick = () => {
    context.onSelect && !disabled && context.onSelect(index)
  }

  const classes = classNames('menu-item', className, {
    'is-disabled': disabled,
    'is-active': context.index === index
  })
  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  )
}

export default MenuItem