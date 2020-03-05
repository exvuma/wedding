import { ColoredBlade } from './ColoredBlade'
import { Box } from 'reflexbox'
import { space, colors } from '../theme'

export type NavProps = {
  // id of the active tab
  activeTab: string
}

const tabTitles = [
  { title: 'John and Victoria', id: 'home' },
  { title: 'Book', id: 'book' },
  { title: 'About Us', id: 'about' },
  { title: 'FAQs', id: 'faqs' },
  { title: 'Wedding Party', id: 'party' },
] as const

export type TabId = typeof tabTitles[number]['id']

export const Navbar: React.FC<NavProps> = ({ activeTab }) => {
  return (
    <ColoredBlade base="red" index={1}>
      <div style={{ zIndex: 99, display: 'flex' }}>
        {tabTitles.map(tab => (
          <Box key={tab.id} p={space[7] + 'em'} textAlign="center">
            <a href={'#' + tab.id}>
              <h2
                style={
                  tab.id === activeTab
                    ? { color: colors.gray[6] }
                    : { color: colors.gray[1] }
                }
              >
                {tab.title}
              </h2>
            </a>
          </Box>
        ))}
      </div>
    </ColoredBlade>
  )
}
