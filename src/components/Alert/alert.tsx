import classNames from "classnames"

export enum AlertType {
  Success = 'success',
  Default = 'default',
  Danger = 'danger',
  Warning = 'warning'
}

interface BaseAlertProps {
  title: string;
  type: AlertType;
  description: string;
  onClose: () => void;
  closable: boolean;
  children: React.ReactNode;
}

const Alert: React.FC<Partial<BaseAlertProps>> = (props) => {
  const {
    title,
    type,
    description,
    onClose,
    closable,
    ...restProps
  } = props
  const classes = classNames('alert', {
    [`alert-${type}`]: type
  })
  return (
    <div className={classes} {...restProps}>
      {
        description ? (
          <>
            <p>{title}</p>
            <p>{description}</p>
          </>
        ) : (
          <>
            <p>{title}</p>
          </>
        )
      }
      <span onClick={() => onClose && onClose()}>关闭</span>
    </div>
  )
}

export default Alert