import React from 'react'
import styled from '@emotion/styled'
import Media from 'react-media'
import { HamburgerSpin } from 'react-animated-burgers'
import { colors, fontFamily, breakpoints, newColors } from '../theme'
import { Title } from './utils/Title'

export type NavProps = {
  activeTab: TabId
}

const tabTitles = [
  { title: 'About Us', id: 'about' },
  { title: 'Book', id: 'book' },
  { title: 'Place Holder', id: 'place' },
  { title: 'John and Victoria', id: 'home' },
  { title: 'Itinerary', id: 'itinerary' },
  { title: 'FAQs', id: 'faqs' },
  { title: 'Wedding Party', id: 'party' },
] as const

const homeTab = tabTitles[2]

export type TabId = typeof tabTitles[number]['id']

export const Navbar: React.FC<NavProps> = ({ activeTab }) => {
  return (
    <NavbarWrapper>
      <Media
        queries={{
          small: `(max-width: ${breakpoints.mobile}em)`,
          large: `(min-width: ${breakpoints.mobile + 0.0001}em)`,
        }}
      >
        {matches => (
          <>
            {matches.large && <NavbarDesktop activeTab={activeTab} />}
            {matches.small && <NavbarMobile activeTab={activeTab} />}
          </>
        )}
      </Media>
    </NavbarWrapper>
  )
}

const NavbarDesktop: React.FC<NavProps> = ({ activeTab }) => (
  <NavbarNav>
    {tabTitles.map(tab => (
      <NavbarNavItem key={tab.id}>
        <NavbarNavLink
          fancy={tab.id === 'home'}
          href={'#' + tab.id}
          active={activeTab === tab.id}
        >
          {tab.title}
        </NavbarNavLink>
      </NavbarNavItem>
    ))}
  </NavbarNav>
)

const NavbarMobile: React.FC<NavProps> = ({ activeTab }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <MobileNavbarWrapper>
      <NavbarNavLink fancy active href={'#' + homeTab.id}>
        {homeTab.title}
      </NavbarNavLink>
      <HamburgerSpin
        barColor={colors.red[4]}
        isActive={isOpen}
        toggleButton={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <MobileNavbarNavContainer>
          <NavbarNav>
            {tabTitles
              .filter(tab => tab.id !== homeTab.id)
              .map(tab => (
                <NavbarNavItem key={tab.id}>
                  <NavbarNavLink
                    fancy={false}
                    href={'#' + tab.id}
                    active={activeTab === tab.id}
                    onClick={() => setIsOpen(false)}
                  >
                    {tab.title}
                  </NavbarNavLink>
                </NavbarNavItem>
              ))}
          </NavbarNav>
        </MobileNavbarNavContainer>
      )}
    </MobileNavbarWrapper>
  )
}

const NavbarWrapper = styled.header`
  position: sticky;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  background: ${colors.gray[1]};
  border-bottom: solid 1px ${colors.rose[0]};
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
`

const NavbarNav = styled.ul`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;

  @media screen and (max-width: ${breakpoints.mobile}em) {
    & {
      display: block;
    }
  }
`

const NavbarNavItem = styled.li`
  flex: 1;
  text-align: center;
`

const NavbarNavLink = styled<'a', { fancy: boolean; active: boolean }>('a')`
  display: inline-block;
  padding: ${({ fancy }) => (fancy ? '1.7em 2em 1.3em' : '1.5em 2em')};
  line-height: 0;
  font-family: ${({ fancy }) =>
    fancy ? fontFamily.script : fontFamily.sansserif};
  color: ${({ active }) => (active ? colors.red[2] : colors.rose[3])};
  /* text-decoration: ${({ active }) => (active ? 'underline' : 'none')}; */
  font-size: ${({ fancy }) => (fancy ? '1.5em' : '1em')};
  white-space: nowrap;
  transition: all 0.2s ease-out;
`

const MobileNavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  & ${NavbarNavLink} {
    padding-left: 1em;
  }
`

const MobileNavbarNavContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  /* Height of navbar for some reason not sure */
  top: 4.6em;
  padding-bottom: 4.6em;
  overflow-y: scroll;
  background: ${newColors.LightShades};
`
