import { render, screen, fireEvent } from "@testing-library/react"
import Button, { ButtonProps, ButtonSize, ButtonType } from "./button"

const defaultProps = {
  onClick: jest.fn()
}

const testProps: ButtonProps = {
  btnType: ButtonType.Primary,
  size: ButtonSize.Large,
  className: 'class'
}

const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn()
}

describe('test Button component', () => {
  test('should render the correct default button', () => {
    render(<Button {...defaultProps}>button</Button>)
    const element = screen.getByText('button')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('BUTTON')
    expect(element).toHaveClass('btn btn-default')
    fireEvent.click(element)
    expect(defaultProps.onClick).toBeCalled()
  })

  test('在不同的props下正确的render出来', () => {
    render(<Button {...testProps}>button</Button>)
    const element = screen.getByText('button')
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('btn-primary btn-lg class')
  })

  test('是否render出link 并且提供href属性', () => {
    render(<Button btnType={ButtonType.Link} href="http://fakeurl">link</Button>)
    const element = screen.getByText('link')
    expect(element).toBeInTheDocument()
    // 是否是 <a></a>
    expect(element.tagName).toEqual('A')
    expect(element).toHaveClass('btn btn-link')
  })

  test('button的disabled属性正常 并且无法响应click事件', () => {
    render(<Button btnType={ButtonType.Default} href="http://fakeurl" {...disabledProps}>button</Button>)
    const element = screen.getByText('button') as HTMLButtonElement
    expect(element).toBeInTheDocument()
    expect(element.disabled).toBeTruthy()
    fireEvent.click(element)
    expect(disabledProps.onClick).not.toHaveBeenCalled()
  })
})