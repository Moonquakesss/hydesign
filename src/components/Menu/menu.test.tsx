/* eslint-disable testing-library/no-render-in-setup */
import { render, screen, fireEvent, RenderResult, cleanup } from '@testing-library/react'
import Menu, { MenuProps } from './menu'
import MenuItem, { MenuItemProps } from './menuItem'

const testMenuProps: MenuProps = {
  defaultIndex: 0,
  onSelect: jest.fn(),
  className: 'test'
}

const testVerticalProps: MenuProps = {
  defaultIndex: 1,
  mode: 'vertical'
}

// 要测试的组件
const NiceMenu = (props: MenuProps) => (
  <Menu {...props}>
    <MenuItem>
      active
    </MenuItem>
    <MenuItem disabled>
      disabled
    </MenuItem>
    <MenuItem>
      xyz
    </MenuItem>
  </Menu>
)

let menuElement: HTMLElement,
  activeElement: HTMLElement,
  disabledElement: HTMLElement

describe('test Menu and MenuItem component', () => {
  // 通用的函数放到 beforeEach 中
  beforeEach(() => {
    cleanup()
    render(NiceMenu(testMenuProps))
    menuElement = screen.getByTestId('test-menu')
    activeElement = screen.getByText('active')
    disabledElement = screen.getByText('disabled')
  })
  test('在默认props下Menu和MenuItem组件是否正常渲染', () => {
    expect(menuElement).toBeInTheDocument()
    expect(menuElement).toHaveClass('hydesign-menu test')
    // eslint-disable-next-line testing-library/no-node-access
    expect(menuElement.getElementsByTagName('li').length).toEqual(3)
    expect(activeElement).toHaveClass('menu-item is-active')
    expect(disabledElement).toHaveClass('menu-item is-disabled')
  })

  test('点击menu-item时是否正常改变active状态以及执行正确的回调函数', () => {
    const thirdItem = screen.getByText('xyz')
    fireEvent.click(thirdItem)
    expect(thirdItem).toHaveClass('is-active')
    expect(activeElement).not.toHaveClass('is-active')
    // 期望 onSelect 函数被调用，且传参为2
    expect(testMenuProps.onSelect).toHaveBeenCalledWith(2)
    fireEvent.click(disabledElement)
    expect(testMenuProps.onSelect).not.toHaveBeenCalledWith(1)
  })

  test('是否切换为vertical模式进行渲染', () => {
    cleanup()
    render(NiceMenu(testVerticalProps))
    menuElement = screen.getByTestId('test-menu')
    expect(menuElement).toHaveClass('hydesign-menu menu-vertical')
  })
})