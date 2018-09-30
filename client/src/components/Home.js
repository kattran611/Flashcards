import React from 'react';
import { Header, Grid, Container } from 'semantic-ui-react';

const Home = () => (
<div>
<Container>

 <Header textAlign="center" as="h3">FlashCards</Header>
 <Grid columns={3} divided>
    <Grid.Row>
      <Grid.Column>
        Question 1: What is React?
      </Grid.Column>
      <Grid.Column>
        Question 2: What is State?
      </Grid.Column>
      <Grid.Column>
        Question 3: What is Babel?
      </Grid.Column>
    </Grid.Row>
  </Grid>
</Container>
</div>
)
export default Home;
