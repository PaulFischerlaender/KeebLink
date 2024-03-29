import React from 'react'
import { Button, Tooltip, Collapse, Text, Col, Card, Link } from '@nextui-org/react';
import config from './components/config.json'
import Vendors from './pages/Vendors'
import Switches from './pages/Switches'
import Keycaps from './pages/Keycaps';
import Kits from './pages/Kits';
import Home from './pages/Home';
import FAQ from './pages/FAQ';
import Imprint from './pages/Imprint';
import PrivacyPolicy from './pages/PrivacyPolicy';
import { useRoutes } from 'hookrouter';
import Guide from './pages/Guide';
import { useMediaPredicate } from "react-media-hook";
import DiscordLogo from './Discord-Logo-White.svg'
import Configurator from './pages/Configurator';

/**
 * 
 * 
 *  @author Paul Fischerländer
 *  Created in Late 2021
 * 
 * 
 */

const routes = {
	"/": () => <Home />,
	"/configurator": () => <Configurator />,
	"/vendors": () => <Vendors />,
	"/switches": () => <Switches />,
	"/keycaps": () => <Keycaps />,
	"/keyboard-kits": () => <Kits />,
	"/guides": () => <Guide />,
	"/imprint": () => <Imprint />,
	"/privacy": () => <PrivacyPolicy />,
	"/faq": () => <FAQ />
};

const openInNewTab = (url) => {
	const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
	if (newWindow) newWindow.opener = null
}

const onClickUrl = (url) => {
	return () => openInNewTab(url)
}
const textSize = "20px";

function App() {
	const biggerThan1540 = useMediaPredicate("(min-width: 1540px)");
	const biggerThan1160 = useMediaPredicate("(min-width: 1350px)");
	const biggerThan740 = useMediaPredicate("(min-width: 740px)");
	const biggerThan480 = useMediaPredicate("(min-width: 480px)");
	const routeResult = useRoutes(routes);
	document.body.style.minHeight = "100vh";

	//Init HTML for side component.
	//Route to other pages via router
	return (
		<div>
			{!biggerThan480 && <div className="hero">
				<NavbarCollapseMobile />
				{routeResult}
				<FooterMobile />
			</div>}
			{biggerThan480 && !biggerThan740 && <div className="hero">
				<NavbarCollapse />
				{routeResult}
				<FooterMobile />
			</div>}
			{biggerThan740 && !biggerThan1160 && <div className="hero">
				<Navbar />
				{routeResult}
				<Footer />
			</div>}
			{biggerThan1160 && !biggerThan1540 && <div className="hero">
				<Navbar />
				{routeResult}
				<Footer />
			</div>}
			{biggerThan1540 && <div className="hero">
				<Navbar />
				{routeResult}
				<Footer />
			</div>}
		</div>
	)
}


function Discord() {
	return (
		<img style={{
			width: "auto",
			height: "25px"
		}} src={DiscordLogo} />
	)
}

function FooterMobile() {
	return (
		<div style={{
			backgroundColor: config.SUB_COLOR,
			paddingBottom: "5vh",
			paddingTop: "5vh",
			bottom: 0
		}}>
			<div className="footer" style={{
				width: "80vw",
				margin: 0,
				margin: "auto",
				display: "flex",
				justifyContent: "space-between"
			}}>
				<div className="logo" style={{
					display: "block"
				}}>
					<Text color={config.LINK_COLOR} style={{
						fontSize: textSize,
						fontWeight: "bold",
					}}>keeblink</Text>
					<Text color={config.TEXT_COLOR} style={{
						fontSize: textSize,
						fontWeight: "normal",
					}}>Created by <br />Paul Fischerländer in 2021.</Text>
				</div>
				<div className="important" style={{
					display: "block"
				}}>
					<Text color={config.LINK_LIGHT_COLOR} style={{
						fontSize: textSize,
						fontWeight: "bold",
					}}>Important</Text>
					<a href="/imprint">
						<Text color={config.TITLE_COLOR} style={{
							fontSize: textSize,
							fontWeight: "normal"
						}}>Imprint</Text></a>
					<a href="/privacy">
						<Text color={config.TITLE_COLOR} style={{
							fontSize: textSize,
							fontWeight: "normal"
						}}>Privacy Policy</Text></a>
					<a href="/faq">
						<Text color={config.TITLE_COLOR} style={{
							fontSize: textSize,
							fontWeight: "normal"
						}}>FAQ</Text></a>
				</div>
			</div>
		</div>
	)
}

function Footer() {
	return (
		<div style={{
			backgroundColor: config.SUB_COLOR,
			paddingBottom: "5vh",
			paddingTop: "5vh",
			bottom: 0
		}}>
			<div className="footer" style={{
				width: "80vw",
				margin: 0,
				margin: "auto",
				display: "flex",
				justifyContent: "space-between"
			}}>
				<div className="logo" style={{
					display: "block"
				}}>
					<Text color={config.LINK_COLOR} style={{
						fontSize: textSize,
						fontWeight: "bold",
					}}>keeblink</Text>
					<Text color={config.TEXT_COLOR} style={{
						fontSize: textSize,
						fontWeight: "normal",
					}}>Created by <br />Paul Fischerländer in 2021.</Text>
				</div>
				<div className="important" style={{
					display: "block"
				}}>
					<Text color={config.LINK_LIGHT_COLOR} style={{
						fontSize: textSize,
						fontWeight: "bold",
					}}>Important</Text>
					<a href="/imprint">
						<Text color={config.TITLE_COLOR} style={{
							fontSize: textSize,
							fontWeight: "normal"
						}}>Imprint</Text></a>
					<a href="/privacy">
						<Text color={config.TITLE_COLOR} style={{
							fontSize: textSize,
							fontWeight: "normal"
						}}>Privacy Policy</Text></a>
					<a href="/faq">
						<Text color={config.TITLE_COLOR} style={{
							fontSize: textSize,
							fontWeight: "normal"
						}}>FAQ</Text></a>
				</div>
				<div className="socialmedia" style={{
					display: "block"
				}}>
					<Text color={config.LINK_LIGHT_COLOR} style={{
						fontSize: textSize,
						fontWeight: "bold",
					}}>Social Media</Text>
					<Tooltip content={'Join our discord!'} placement="bottom" color={config.LINK_COLOR}>
						<Button auto color="primary" icon={<Discord fill="white" filled />} onClick={onClickUrl("https://discord.gg/x9kGNGRsYM")} />
					</Tooltip>
				</div>
			</div>
		</div>
	)
}

function NavbarCollapseMobile() {
	return (
		<div style={{
			padding: "2vh",
			display: "flex",
			justifyContent: "space-between",
			boxShadow: "0 10px 4px -2px #F4F6FB"
		}}>
			<Collapse
				shadow
				title="Navigation"
				style={{
					backgroundColor: config.SUB_COLOR
				}}
			>
				<Link href="/" className="nav-imprint" style={{
					marginRight: "1vw"
				}}><Text color={config.LINK_COLOR} style={{
					fontSize: "20px",
					fontWeight: "bold"
				}}>Home</Text>
				</Link>
				<Link href="/vendors" className="nav-imprint" style={{
					marginRight: "1vw"
				}}><Text color={config.LINK_COLOR} style={{
					fontSize: "20px",
					fontWeight: "bold"
				}}>Vendors</Text>
				</Link>
				<Link href="/keyboard-kits" className="nav-imprint" style={{
					marginRight: "1vw"
				}}><Text color={config.LINK_COLOR} style={{
					fontSize: "20px",
					fontWeight: "bold"
				}}>Keyboard Kits</Text>
				</Link>
				<Link color={config.LINK_COLOR} href="/switches" className="nav-imprint" style={{
					marginRight: "1vw"
				}}><Text style={{
					fontSize: "20px",
					fontWeight: "bold"
				}}>Switches</Text>
				</Link>
				<Link color={config.LINK_COLOR} href="/keycaps" className="nav-imprint" style={{
					marginRight: "1vw"
				}}><Text style={{
					fontSize: "20px",
					fontWeight: "bold"
				}}>Keycaps</Text>
				</Link>
				<Button auto>
					<Text style={{
						fontSize: "20px",
						fontWeight: "bold"
					}}>Submit</Text>
				</Button>
				<Tooltip content={'Join our discord!'} placement="bottom" color={config.LINK_COLOR}>
					<Button auto color="primary" icon={<Discord fill="white" filled />} onClick={onClickUrl("https://discord.gg/x9kGNGRsYM")} />
				</Tooltip>
			</Collapse>
		</div>
	)
}

function NavbarCollapse() {
	return (
		<div style={{
			padding: "2vh",
			display: "flex",
			justifyContent: "space-between",
			boxShadow: "0 10px 4px -2px #F4F6FB"
		}}>
			<div className="logo" style={{
				marginRight: "5vw",
				paddingTop: "2.5vh"
			}}>
				<a href="/"><Text color={config.LINK_COLOR} style={{
					fontSize: textSize,
					fontWeight: "bold",
				}}>keeblink</Text></a>
			</div>
			<Collapse
				shadow
				title="Navigation"
				style={{
					backgroundColor: config.SUB_COLOR
				}}
			>
				<Link href="/vendors" className="nav-imprint" style={{
					marginRight: "1vw"
				}}><Text color={config.LINK_COLOR} style={{
					fontSize: "20px",
					fontWeight: "bold"
				}}>Vendors</Text>
				</Link>
				<Link href="/keyboard-kits" className="nav-imprint" style={{
					marginRight: "1vw"
				}}><Text color={config.LINK_COLOR} style={{
					fontSize: "20px",
					fontWeight: "bold"
				}}>Keyboard Kits</Text>
				</Link>
				<Link color={config.LINK_COLOR} href="/switches" className="nav-imprint" style={{
					marginRight: "1vw"
				}}><Text style={{
					fontSize: "20px",
					fontWeight: "bold"
				}}>Switches</Text>
				</Link>
				<Link color={config.LINK_COLOR} href="/keycaps" className="nav-imprint" style={{
					marginRight: "1vw"
				}}><Text style={{
					fontSize: "20px",
					fontWeight: "bold"
				}}>Keycaps</Text>
				</Link>
				<Button auto>
					<Text style={{
						fontSize: "20px",
						fontWeight: "bold"
					}}>Submit</Text>
				</Button>
				<Tooltip content={'Join our discord!'} placement="bottom" color={config.LINK_COLOR}>
					<Button auto color="primary" icon={<Discord fill="white" filled />} onClick={onClickUrl("https://discord.gg/x9kGNGRsYM")} />
				</Tooltip>
			</Collapse>
		</div>
	)
}

function Navbar() {
	return (
		<div style={{
			padding: "2vh",
			display: "flex",
			justifyContent: "space-between",
			boxShadow: "0 10px 4px -2px #F4F6FB"
		}}>
			<div className="logo">
				<a href="/"><Text color={config.LINK_COLOR} style={{
					fontSize: textSize,
					fontWeight: "bold",
				}}>keeblink</Text></a>
			</div>
			<div className="action" style={{
				display: "flex"
			}}>
				<Link href="/vendors" className="nav-imprint" style={{
					marginRight: "1vw"
				}}><Text color={config.LINK_COLOR} style={{
					fontSize: "20px",
					fontWeight: "bold"
				}}>Vendors</Text>
				</Link>
				<Link href="/keyboard-kits" className="nav-imprint" style={{
					marginRight: "1vw"
				}}><Text color={config.LINK_COLOR} style={{
					fontSize: "20px",
					fontWeight: "bold"
				}}>Keyboard Kits</Text>
				</Link>
				<Link color={config.LINK_COLOR} href="/switches" className="nav-imprint" style={{
					marginRight: "1vw"
				}}><Text style={{
					fontSize: "20px",
					fontWeight: "bold"
				}}>Switches</Text>
				</Link>
				<Link color={config.LINK_COLOR} href="/keycaps" className="nav-imprint" style={{
					marginRight: "1vw"
				}}><Text style={{
					fontSize: "20px",
					fontWeight: "bold"
				}}>Keycaps</Text>
				</Link>
				<Button auto>
					<Text style={{
						fontSize: "20px",
						fontWeight: "bold"
					}}>Submit</Text>
				</Button>
			</div>
		</div>
	)
}

export default App