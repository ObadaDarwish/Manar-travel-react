import React from 'react';
import GoogleMapReact from 'google-map-react';

const MyMarkerComp = () => <div>ss</div>;

class SimpleMap extends React.Component {
    static defaultProps = {
        center: {
            lat: 30.053802,
            lng: 31.226761
        },
        zoom: 15
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '80vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyDNMwX1QVNDqd5eUs6kNBKDQtWiXLRWYQA' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <MyMarkerComp
                        lat={ 30.053802}
                        lng={31.226761}
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;