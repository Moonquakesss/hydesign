import classNames from "classnames"

export enum ButtonSize {
  Large = 'lg',
  Small = 'sm'
}

export enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link'
}

interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  href?: string;
  children?: React.ReactNode;
}

/**
 * button 标签原始属性
 */
type NativeButtonProps = React.ButtonHTMLAttributes<HTMLElement>
/**
 * link 标签原始属性
 */
type NativeAnchorProps = React.AnchorHTMLAttributes<HTMLElement>
/**
 * button 和 link 的属性 都设置为可选的
 */
export type ButtonProps = Partial<BaseButtonProps & NativeButtonProps & NativeAnchorProps>

const Button: React.FC<ButtonProps> = (props) => {
  const {
    btnType,
    disabled,
    size,
    children,
    href,
    className,
    ...restProps
  } = props
  // 创建class
  // btn btn-primary btn-lg
  const classes = classNames('btn', className, {
    // 当btnType 为 true 时 则添加上这个class
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    // 给 link 类型添加 disabled 的 class（因为a标签没有这个属性）
    'disabled': (btnType === ButtonType.Link) && disabled
  })

  if (btnType === ButtonType.Link && href) {
    return (
      <a
        className={classes}
        href={href}
        {...restProps}
      >
        {children}
      </a>
    )
  } else {
    return (
      <button
        className={classes}
        disabled={disabled}
        {...restProps}
      >
        {children}
      </button>
    )
  }
}

Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Default
}

export default Button