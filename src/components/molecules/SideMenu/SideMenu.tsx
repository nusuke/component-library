import * as React from "react"
import classNames from "classnames"

import "./SideMenu.scss"

interface P {
  isOpen: boolean;
  openHandler: (isOpen: boolean) => void;
}
const SideMenu: React.FC<P> = props => {
  const [isOpen, setIsOpen] = React.useState(props.isOpen);
  const className = classNames("SideMenu", {
    "SideMenu--open": isOpen
  })

  React.useEffect(() => {
    document.addEventListener('click', (e) => {
      const element = e.target as HTMLElement
      
      if ( (!element.className.split(" ").includes("SideMenu")) ) {           
        setIsOpen(false)
      } 
    })
    return () => {
      console.log("un mount");
    }
  },[])
  
  React.useEffect(() => {
    setIsOpen(props.isOpen)
  }, [props.isOpen])

  React.useEffect(() => {
    props.openHandler(isOpen)
  }, [isOpen])



  return (
    <aside className={className}>
      <h2 className="SideMenu__hidden">リスト</h2>
      <ul>
        {props.children}
      </ul>
    </aside>
  )
}
export default SideMenu
