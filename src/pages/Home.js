import { Card, Collapse, Grid, Button, Spacer, Text, Link, Modal, Row, Container } from "@nextui-org/react";
import config from '../components/config.json'
import React from "react"
import { useMediaPredicate } from "react-media-hook";

const header = "Get you started with the keyboard hobby"
const headerDesc = "An webapp built for the custom keyboard community. From keyboard kits to switches, we got you covered."

const guidesText = "Getting started with building your own keyboard can be very daunting at first. With our guides we are giving you the opportunity to build your dream board with the least possible headache."
const stockText = "Our website is designed to easily become aware of every notable keyboard part out there. You can filter your results and get links to a majority of vendors who have it in stock."
const vendorText = "Finding the right vendors when starting your keyboard journey is an essential part. With our vendor list you can easily see where each vendor is located. This can not only dramatically help with decreasing shipping times and costs but also preserves you from potential customs fees."

const statsTextKeyboard = "Number of keyboards in our database:"
const statsTextKeycaps = "Number of keycaps in our database:"
const statsTextSwitches = "Number of switches in our database:"

const faqFree = "Yeah. This website is completely free for you to use as much as you like."
const faqFinance = "Neither are there any hidden ads nor do we sell your data to thirdparties. We finance ourselves with refferal links. This means when you use a link on our website and then buy something of that vendor we get a little percentage."
const faqTech = "This website is made with React and Airtable. For the UI we use a library called NextUI, check them out here:"
const faqContact = "You can find our contact detials by clicking here:"

const marginBottomHome = "30vh"

const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}

const onClickUrl = (url) => {
    return () => openInNewTab(url)
}

function Home() {
    const biggerThan1000 = useMediaPredicate("(min-width: 1000px)");
    return (
        <div>
            {!biggerThan1000 && <div className="header" style={{
                marginBottom: "10vh",
                marginTop: "8vh",
                height: "75vh",
                display: "flex"
            }}>
                <div className="text" style={{
                    marginTop: "10vh"
                }}>
                    <Text style={{
                        fontSize: "3rem",
                        fontWeight: "bold",
                        marginBottom: "3vh",
                        marginTop: 0
                    }} color="white">{header}</Text>
                    <Text style={{
                        fontSize: "1.4rem",
                        fontWeight: "normal",
                        marginTop: 0,
                        marginBottom: 0
                    }} color="gray">{headerDesc}</Text>
                </div>
            </div>}
            {biggerThan1000 && <div className="header" style={{
                marginBottom: "10vh",
                marginTop: "8vh",
                height: "75vh",
                display: "flex"
            }}>
                <div className="text" style={{
                    width: "37vw",
                    marginTop: "10vh"
                }}>
                    <Text style={{
                        fontSize: "3rem",
                        fontWeight: "bold",
                        marginBottom: "3vh",
                        marginTop: 0
                    }} color="white">{header}</Text>
                    <Text style={{
                        fontSize: "1.4rem",
                        fontWeight: "normal",
                        marginTop: 0,
                        marginBottom: 0
                    }} color="gray">{headerDesc}</Text>
                </div>
            </div>}
            <div className="features" style={{
                marginBottom: marginBottomHome
            }}>
                <Text h2 color="white" style={{
                    marginBottom: "2vh"
                }}>Our core features!</Text>
                <RenderCards />
            </div>
            <div className="FAQ">
                <Text h2 color="white" style={{
                    marginBottom: "2vh",
                    marginTop: "6vh"
                }}>Frequently asked Questions!</Text>
                <RenderFAQ />
            </div>
            <Spacer y={3} />
        </div>
    )
}

function RenderFAQ() {
    return (
        <Collapse.Group splitted style={{
            width: "100%"
        }}>
            <Collapse shadow title={<Text h3 color="white">Is this website free?</Text>} style={{
                backgroundColor: config.DARK_COLOR_SIDE
            }}>
                <Text h4 color="white">{faqFree}</Text>
            </Collapse>
            <Collapse shadow title={<Text h3 color="white">How do you finance this app then?</Text>} style={{
                backgroundColor: config.DARK_COLOR_SIDE
            }}>
                <Text h4 color="white">{faqFinance}</Text>
            </Collapse>
            <Collapse shadow title={<Text h3 color="white">How did you build this website?</Text>} style={{
                backgroundColor: config.DARK_COLOR_SIDE
            }}>
                <Text h4 color="white">{faqTech}</Text>
                <Button stlye={{
                    marginTop: "10px"
                }} onClick={onClickUrl("https://NextUI.org/")}><Link icon>NextUI</Link></Button>
            </Collapse>
            <Collapse shadow title={<Text h3 color="white">How can I contact you?</Text>} style={{
                backgroundColor: config.DARK_COLOR_SIDE
            }}>
                <Text h4 color="white">{faqContact}</Text>
            </Collapse>
        </Collapse.Group>
    )
}

function RenderCards() {
    return (
        <Grid.Container gap={2} justify="space-evenly">
            <Grid>
                <Card color="primary" style={{
                    minWidth: "235px",
                    maxWidth: "450px"
                }}>
                    <Card.Header>
                        <Text h3 color="white">
                            Guides
                        </Text>
                    </Card.Header>
                    <Card.Body>
                        <Text h4 color={config.LIGHT_TEXT_COLOR}>
                            {guidesText}
                        </Text>
                    </Card.Body>
                </Card>
            </Grid>
            <Grid>
                <Card color="primary" style={{
                    minWidth: "235px",
                    maxWidth: "450px"
                }}>
                    <Card.Header>
                        <Text h3 color="white">
                            Stock overview
                        </Text>
                    </Card.Header>
                    <Card.Body>
                        <Text h4 color={config.LIGHT_TEXT_COLOR}>
                            {stockText}
                        </Text>
                    </Card.Body>
                </Card>
            </Grid>
            <Grid>
                <Card color="primary" style={{
                    minWidth: "235px",
                    maxWidth: "450px"
                }}>
                    <Card.Header>
                        <Text h3 color="white">
                            Vendor list
                        </Text>
                    </Card.Header>
                    <Card.Body>
                        <Text h4 color={config.LIGHT_TEXT_COLOR}>
                            {vendorText}
                        </Text>
                    </Card.Body>
                </Card>
            </Grid>
        </Grid.Container>
    )
}

export default Home;