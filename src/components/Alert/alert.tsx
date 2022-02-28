import classNames from "classnames"

export enum AlertType {
  Success = 'success',
  Default = 'default',
  Danger = 'danger',
  Warning = 'warning'
}

interface BaseAlertProps {
  message: string;
  type: AlertType;
  description: string;
}

const Alert: React.FC<BaseAlertProps> = (props) => {
  const {
    message,
    type,
    description
  } = props
  const classes = classNames()
  return (
    <div></div>
  )
}

export default Alert