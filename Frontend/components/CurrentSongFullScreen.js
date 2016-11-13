var React = require('react');


var CurrentSongFullScreen = React.createClass({

    PanelDefaultStyle: {
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        height: '87%'
    },
    ImageStyle: {
        height: '256px',
        width: '256px',
    },

    render(){
        return <div className="container height-full">
            <div className="panel panel-default" style={this.PanelDefaultStyle}>
                <div className="panel-body">
                    <div className="col-xs-12 col-md-12 no-padding">
                        <img src={this.props.song.imageUrl} style={this.ImageStyle}/>
                    </div>
                    <div className="col-xs-12 col-md-12 no-padding">
                        <div className="col-xs-8 col-md-8 no-padding">
                            <div className="artist-name">{this.props.song.artistName}</div>
                            <div className="song-name">{this.props.song.name}</div>
                            <div className="smalltext">{this.props.song.albumName}</div>
                        </div>
                    </div>
                    <div className="col-xs-4 col-md-4">
                        <img src="/img/equalizer.gif" style={this.ImageStyle} ></img>

                    </div>
                </div>
            </div>
            </div>

    }

});

module.exports = CurrentSongFullScreen;
