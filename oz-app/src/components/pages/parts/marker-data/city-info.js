import React, {PureComponent} from 'react';

export default class CityInfo extends PureComponent {

  render() {
    const {info} = this.props;
    console.log(info);
    var displayName = ''
    if (!info.group){
      displayName = `\n\n${info.name}`;

    }else{
      displayName = `\n\n${info.name}\n\n${info.group}\n\n${info.address}`;
    }

    return (
      <div>
        <div style={{width:'150px', opacity:'0.8'}}>
          {displayName}
        </div>
      </div>
    );
  }
}
