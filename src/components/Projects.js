import React from 'react';
import BallIsLife from '../Images/Jazz-Logo_Single_Front_aec9f4df-237d-46d5-8c3a-d71d52fd71d7.png';
import ShopUnicity from '../Images/images.png';
import StrikerBot from '../Images/fc220x200black-u2.jpg';
import { Container, Segment, Divider, Header, Grid, Image, List } from 'semantic-ui-react';

const Projects = () => {
  return(
    <Container>
      <Divider hidden/>
      <Segment textAlign="center" inverted>
        <Header as="h1">Projects</Header>
      </Segment>
      <Divider hidden />
      <Grid>

        <Grid.Row>
          <Grid.Column width={5}>
            <Segment textAlign="center" inverted>
              <Segment>
                <Image src={BallIsLife} size="medium"/>
                <Header as="h1">Ball Is Life</Header>
              </Segment>
              <Segment>
                <Header>Tech Used:</Header>
                <List as="ul">
                  <List.Item as="li">Ruby on Rails</List.Item>
                  <List.Item as="li">React with Redux</List.Item>
                  <List.Item as="li">MySQL</List.Item>
                </List>
                <Segment inverted>
                  NOTES
                </Segment>
                <Divider hidden/>

              </Segment>
              <a href="https://github.com/JustinStoddard/Ball-Is-Life" target="_blank" rel="noopener noreferrer">Check Out Source</a>
            </Segment>
          </Grid.Column>

          <Grid.Column width={6}>
            <Segment textAlign="center" inverted>
              <Segment>
                <Image src={ShopUnicity} size="medium" style={styles.imagePadding1}/>
                <Divider hidden/>
                <Divider hidden/>
                <Header as="h1">shop.unicity.com</Header>
              </Segment>
              <Segment>
              <Header>Tech Used:</Header>
                <List as="ul">
                  <List.Item as="li">PHP and Node.Js</List.Item>
                  <List.Item as="li">Angular 1</List.Item>
                  <List.Item as="li">Gulp and Bootstrap</List.Item>
                </List>
                <Segment inverted>
                  NOTES
                </Segment>
                <Divider hidden/>

              </Segment>
              <a href="https://shop.unicity.com/#/home" target="_blank" rel="noopener noreferrer">Check Out Source</a>
            </Segment>
          </Grid.Column>

          <Grid.Column width={5}>
            <Segment textAlign="center" inverted>
              <Segment>
                <Image src={StrikerBot} size="medium" style={styles.imagePadding2}/>
                <Divider hidden/>
                <Header as="h1">StrikerBot</Header>
              </Segment>
              <Segment>
              <Header>Tech Used:</Header>
                <List as="ul">
                  <List.Item as="li">Node.Js</List.Item>
                  <List.Item as="li">Ruby</List.Item>
                  <List.Item as="li">ES6 Javascript</List.Item>
                </List>
                <Segment inverted>
                  NOTES
                </Segment>
                <Segment textAlign="left">
                  <strong>Striker</strong> is an idea i've had for a long time. Think Tony Starks Jarvos. I wanted striker to be an A.I. that did simple tasks on command. Currently Striker is connected to another app called Discord, A messaging platform for gamers. Striker can answer to simple commands but they're scripted, not Independant decisions.
                </Segment>
              </Segment>
              <a href="https://github.com/JustinStoddard/StrikerBot" target="_blank" rel="noopener noreferrer">Check Out Source</a>
            </Segment>
          </Grid.Column>
        </Grid.Row>

      </Grid>
    </Container>
  )
}

const styles = {
  imagePadding1: {
    marginBottom: '16px'
  },
  imagePadding2: {
    marginBottom: '20px'
  }
}

export default Projects;