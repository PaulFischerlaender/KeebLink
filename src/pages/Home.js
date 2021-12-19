import { Card, Collapse, Grid, Button, Spacer, Text, Link, Tooltip } from "@nextui-org/react";
import React from "react"
import { useMediaPredicate } from "react-media-hook";
import Imprint from '../pages/Imprint';
import stockSVG from '../components/icons/stock.svg'
import configuratorSVG from '../components/icons/configurator.svg'
import contentright from '../components/icons/contentright.png'
import DiscordLogo from '../Discord-Logo-White.svg'

const colorBlack = "#222531";
const colorGray = "#6B7280";
const colorBlueTag = "#2563EB";
const colorBlue = "#3B82F6";

const headerSize = "90px";
const tagSize = "20px";
const textSize = "20px";

const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}

const onClickUrl = (url) => {
    return () => openInNewTab(url)
}

function Home() {
    console.log(window.location.pathname)
    const biggerThan1000 = useMediaPredicate("(min-width: 1000px)");
    document.body.style.height = "auto"
    return (
        <div style={{
        }}>
            {biggerThan1000 &&
                <div>
                    <div className="main" style={{
                        width: "80vw",
                        margin: 0,
                        margin: "auto",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between"
                    }}>
                        <div className="splitter" style={{
                            display: "flex",
                            marginTop: "10vh",
                            marginBottom: "50vh"
                        }}>
                            <div className="content-left" style={{
                                height: "50px",
                                width: "40vw"
                            }}>
                                <div>
                                    <div className="tag" style={{
                                        height: "auto",
                                        marginBottom: "1vh"
                                    }}>
                                        <Text color={colorBlueTag} style={{
                                            fontWeight: "bold",
                                            fontSize: tagSize
                                        }}>Keyboard Hub.</Text>
                                    </div>
                                    <div className="header" style={{
                                        height: "auto",
                                        marginBottom: "1vh"
                                    }}>
                                        <Text color={colorBlack} style={{
                                            fontWeight: "bolder",
                                            fontSize: headerSize
                                        }}>KeebLink</Text>
                                    </div>
                                    <div className="header-footer">
                                        <Text color={colorGray} style={{
                                            fontSize: textSize
                                        }}>Free to use Custom Keyboard Hub. From Switches
                                            to Keyboard Kits,<br /> we got everything you need.</Text>
                                    </div>
                                </div>
                                <div className="features" style={{
                                    marginTop: "10vh",
                                    display: "flex"
                                }}>
                                    <StockOverview />
                                    <Configurator />
                                </div>
                            </div>
                            <div className="content-right" style={{
                                width: "40vw"
                            }}>
                                <ContentCard />
                            </div>
                        </div>
                    </div>
                </div>}
        </div>
    )
}

function ContentCard() {
    return (
        <div>
            <img src={contentright} alt="" style={{
                width: "100%"
            }}></img>
        </div>
    )
}

function StockOverview() {
    return (
        <div className="stock-overview" style={{
            display: "block",
            marginRight: "2vw"
        }}>
            <img src={stockSVG} alt="" style={{
                width: "80px",
                marginBottom: "2vh"
            }}></img>
            <Text color={colorBlack} style={{
                fontSize: textSize,
                fontWeight: "bold",
                marginBottom: "1vh"
            }}>Stock Overview</Text>
            <Text color={colorGray} style={{
                fontSize: textSize,
                marginBottom: "3vh"
            }}>Lists of the most desired keyboard
                parts, with links to different vendors
                in the world.</Text>
            <a href="/switches">
                <Text color={colorBlue} style={{
                    fontSize: textSize,
                    fontWeight: "bold"
                }}>Learn More</Text>
            </a>
        </div>
    )
}

function Configurator() {
    return (
        <div className="configurator" style={{
            display: "block"
        }}>
            <img src={configuratorSVG} alt="" style={{
                width: "80px",
                marginBottom: "2vh"
            }}></img>
            <Text color={colorBlack} style={{
                fontSize: textSize,
                fontWeight: "bold",
                marginBottom: "1vh"
            }}>Configurator</Text>
            <Text color={colorGray} style={{
                fontSize: textSize,
                marginBottom: "3vh"
            }}>Configure your next dream board
                and automatically check if there
                are any issues with it.</Text>
            <a href="configurator">
                <Text color={colorBlue} style={{
                    fontSize: textSize,
                    fontWeight: "bold"
                }}>Learn More</Text>
            </a>
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

export default Home;