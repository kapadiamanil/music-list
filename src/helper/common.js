import moment from "moment";

export const dateFormat = "DD/MM/YYYY";

// To return the columns for the music list table
export const getColumns = () => {
  return [
    {
      title: "Song",
      dataIndex: "song",
      key: "song",
      sorter: (a, b) => b["song"].localeCompare(a["song"]),
    },
    {
      title: "Artist",
      dataIndex: "artist",
      key: "artist",
      sorter: (a, b) => b["artist"].localeCompare(a["artist"]),
    },
    {
      title: "Song Release Date",
      dataIndex: "songReleaseDate",
      key: "songReleaseDate",
      sorter: (a, b) =>
        moment(b.songReleaseDate, dateFormat).unix() -
        moment(a.songReleaseDate, dateFormat).unix(),
    },
    {
      title: "Play Count",
      dataIndex: "playCount",
      key: "playCount",
      sorter: (a, b) => b["playCount"] - a["playCount"],
    },
    {
      title: "Metric A",
      dataIndex: "metricA",
      key: "metricA",
      sorter: (a, b) => b["metricA"] - a["metricA"],
    },
    {
      title: "Metric B",
      dataIndex: "metricB",
      key: "metricB",
      sorter: (a, b) => b["metricB"] - a["metricB"],
    },
    {
      title: "Metric C",
      dataIndex: "metricC",
      key: "metricC",
      sorter: (a, b) => b["metricC"] - a["metricC"],
    },
    {
      title: "Metric D",
      dataIndex: "metricD",
      key: "metricD",
      sorter: (a, b) => b["metricD"] - a["metricD"],
    },
    {
      title: "Metric E",
      dataIndex: "metricE",
      key: "metricE",
      sorter: (a, b) => b["metricE"] - a["metricE"],
    },
    {
      title: "Metric F",
      dataIndex: "metricF",
      key: "metricF",
      sorter: (a, b) => b["metricF"] - a["metricF"],
    },
    {
      title: "Metric G",
      dataIndex: "metricG",
      key: "metricG",
      sorter: (a, b) => b["metricG"] - a["metricG"],
    },
    {
      title: "Metric H",
      dataIndex: "metricH",
      key: "metricH",
      sorter: (a, b) => b["metricH"] - a["metricH"],
    },
    {
      title: "Metric I",
      dataIndex: "metricI",
      key: "metricI",
      sorter: (a, b) => b["metricI"] - a["metricI"],
    },
    {
      title: "Metric J",
      dataIndex: "metricJ",
      key: "metricJ",
      sorter: (a, b) => b["metricJ"] - a["metricJ"],
    },
    {
      title: "Metric K",
      dataIndex: "metricK",
      key: "metricK",
      sorter: (a, b) => b["metricK"] - a["metricK"],
    },
    {
      title: "Metric L",
      dataIndex: "metricL",
      key: "metricL",
      sorter: (a, b) => b["metricL"] - a["metricL"],
    },
    {
      title: "Metric M",
      dataIndex: "metricM",
      key: "metricM",
      sorter: (a, b) => b["metricM"] - a["metricM"],
    },
    {
      title: "Metric N",
      dataIndex: "metricN",
      key: "metricN",
      sorter: (a, b) => b["metricN"] - a["metricN"],
    },
    {
      title: "Metric O",
      dataIndex: "metricO",
      key: "metricO",
      sorter: (a, b) => b["metricO"] - a["metricO"],
    },
    {
      title: "Metric P",
      dataIndex: "metricP",
      key: "metricP",
      sorter: (a, b) => b["metricP"] - a["metricP"],
    },
  ];
};
