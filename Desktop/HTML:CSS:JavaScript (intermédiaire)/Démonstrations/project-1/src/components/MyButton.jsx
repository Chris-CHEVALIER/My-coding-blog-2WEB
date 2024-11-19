/* eslint-disable react/prop-types */
import { Button } from 'antd'

export default function MyButton (props) {
  return (
    <Button
       
      onClick={props.handleClick}
      type='primary'
      shape='rounded'
      icon={props.icon}
    >
      Rédiger un article
    </Button>
  )
}
