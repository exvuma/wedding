import React from 'react'
import styled from '@emotion/styled'
import Media from 'react-media'
import { HamburgerSpin } from 'react-animated-burgers'
import { colors, fontFamily, breakpoints, newColors } from '../theme'
import { Title } from './utils/Title'
import { css } from '@emotion/core'

export type NavProps = {
  activeTab: TabId
}

const tabTitles = [
  // { title: 'About Us', id: 'about' },
  { title: 'Book', id: 'book' },
  { title: 'Itinerary', id: 'itinerary' },
  // { title: 'Place Holder', id: 'place' },
  { title: 'John and Victoria', id: 'home' },
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
  /* -1px to account for the border-top */
  top: -1px;
  left: 0;
  width: 100%;
  background: ${colors.gray[0]};
  /* background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10h10v10H0V10zM10 0h10v10H10V0z' fill='%23dbd6d3' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E"); */
  background-size: 7px;
  text-shadow: 0 1px 0 #fff;
  border-top: solid 1px ${colors.gray[1]};
  border-bottom: solid 1px ${colors.gray[1]};
`

const NavbarNav = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0;
  padding: 0 1em;
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
  /* fancy is script font */
  padding: ${({ fancy }) => (fancy ? '1.6em 2em 1.4em' : '')};
  line-height: 0;
  font-family: ${({ fancy }) =>
    fancy ? fontFamily.script : fontFamily.sansserif};
  color: ${({ active }) => (active ? colors.red[4] : colors.purple[6])};
  ${({ fancy, active }) =>
    fancy &&
    css`
      font-family: ${fontFamily.script};
      color: ${active ? colors.red[4] : colors.gray[4]};
    `}
  /* text-decoration: ${({ active }) => (active ? 'underline' : 'none')}; */
  font-size: ${({ fancy }) => (fancy ? '1.5em' : '1em')};
  white-space: nowrap;
  &:before,
  &:after {
    content: '';
    @media screen and (max-width: ${breakpoints.mobile}em) {
      display: none;
    }
    display: inline-block;
    border-top: 1px solid ${colors.red[4]};
    vertical-align: middle;
    width: 20px;
    margin: 0 0.8em;
    opacity: 0;
    ${({ active }) =>
      active &&
      css`
        opacity: 100;
      `}
  }
`

// &:after: ${({ active }) => (active ? { underline: 'none' } : '')};
// {
// content: '';
//     display: inline-block;
//     width: 60px;
//     border-top: 3px solid ${colors.gray[3]};
//     vertical-align: middle;
//     margin: 0 0.5em;
//}
//   )};
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
  padding-top: 2em;
  /* Height of navbar for some reason not sure */
  top: 5.6em;
  padding-bottom: 5.6em;
  overflow-y: scroll;
  background: ${newColors.LightShades};

  ${NavbarNavLink} {
    font-size: 1.5em;
    padding: 1em;
    border-bottom: dotted 2px ${colors.rose[3]};
  }
`
