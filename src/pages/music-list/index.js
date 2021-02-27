import React, { Component } from "react";

import { Table } from "antd";

import { getColumns } from "../../helper/common";
import { getRequest } from "../../helper/Api";

class MusicList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount = async () => {
    // Axios call for getting music when user comes to this page
    const response = await getRequest("/music");

    // Setting response data in state
    this.setState({
      data: response.data.map((res, index) => {
        return { ...res, id: index }; // Adding id key to the data for unique key
      }),
    });
  };

  render() {
    // To get column for the table
    const columns = getColumns();

    const isLoading = !this.state.data.length;

    return (
      <div className="table-wrapper">
        <Table
          columns={columns}
          dataSource={this.state.data}
          loading={isLoading}
          bordered
          showSorterTooltip={false}
          pagination={false}
          rowKey="id"
        />
      </div>
    );
  }
}

export default MusicList;
