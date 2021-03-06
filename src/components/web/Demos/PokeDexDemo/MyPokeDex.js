import React from 'react';
import Loadable from 'react-loadable';
import Loader from '../../../../Loader';
import PokeDexImage from '../../../../Images/My PokeDex Image.png';
import { Grid, Segment, Button, Card, Image, Header } from 'semantic-ui-react';
const PokeMon = Loadable({loader: () => import('./PokeMon'), loading: () => <Loader/>})

const MyPokeDex = ({ myPokeMon, viewMyPokeDex, deletePokeMon }) => {
  return(
    <Grid>
      <Grid.Row>
        <Grid.Column width={4}></Grid.Column>
        <Grid.Column width={8}>
          <Image src={PokeDexImage} centered/>
        </Grid.Column>
        <Grid.Column width={4}>
          <Segment inverted>
            <Segment textAlign="center" color="red">
              <Button onClick={viewMyPokeDex} size="huge" color="red">Back</Button>
            </Segment>
          </Segment>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={2}></Grid.Column>
        <Grid.Column width={12}>
          <Segment inverted>
            <Segment textAlign="center" color="red"> 
              {!myPokeMon[0] ?
                  <Grid>
                    <Grid.Row>
                      <Grid.Column width={2}></Grid.Column>
                      <Grid.Column width={12}>
                        <Segment textAlign="center" basic>
                          <Header as="h5">Your PokeDex is currently Empty.<br />Click the Back button to add PokeMon!</Header>
                        </Segment>
                      </Grid.Column>
                      <Grid.Column width={2}></Grid.Column>
                    </Grid.Row>
                  </Grid>
                :
                  <Card.Group itemsPerRow={4}>
                    <PokeMon 
                      myPokeMon={myPokeMon}
                      deletePokeMon={deletePokeMon}
                    />
                  </Card.Group>
              }
            </Segment>
          </Segment>
        </Grid.Column>
        <Grid.Column width={2}></Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default MyPokeDex