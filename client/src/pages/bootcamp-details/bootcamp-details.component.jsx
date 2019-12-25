import React from 'react';

class BootcampDetailsPage extends React.Component {


render() {
    console.log(`PROPS`);
    console.log(this.props);
    return (
        <h2>Coming soon Bootcamp details page - {this.props.match.params.id}</h2>
    )
}

}

export default BootcampDetailsPage;