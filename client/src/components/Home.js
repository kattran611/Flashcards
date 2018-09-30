import React from 'react';
import { Header, Grid, Container, Button } from 'semantic-ui-react';


const Home = () => (
<div>
<Container>

 <Header textAlign="center" as="h3">Flash Cards</Header>
 <Grid columns={3} divided>
    <Grid.Row>
      <Grid.Column>
        Question 1: What is React?
          <button>Flip</button>
      </Grid.Column>
      <Grid.Column>
        Question 2: What is State?
          <button>Flip</button>
      </Grid.Column>
      <Grid.Column>
        Question 3: What is Babel?
          <button> Flip</button>
      </Grid.Column>
    </Grid.Row>


  </Grid>
</Container>
</div>
)
export default Home;
