import { TabId } from '../Navbar'
import { Waypoint } from 'react-waypoint'
type PanelProps = {
  setActiveTab: (tab: TabId) => void
  id: TabId
}
export const Panel: React.FC<PanelProps> = ({ setActiveTab, id, children }) => (
  <Waypoint
    debug={true}
    topOffset="50px"
    onEnter={({}) => {
      setActiveTab(id)
    }}
  >
    <div id={id}>{children}</div>
  </Waypoint>
)
