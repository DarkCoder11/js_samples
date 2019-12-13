const memoizedAdd = fetchData => {
  let memo = {};

  return body => {
    let key = JSON.stringify(body);

    if (key in memo) {
      return memo[key];
    } else {
      let res = fetchData(body);
      memo[key] = res;

      return res;
    }
  };
};

const getBondsData = memoizedAdd(async ({ date, isins }) => {
  const result = await http.post({
    url: `/bonds/${date}`,
    body: isins
  });

  return result;
});

getBondsData({
  date: "20180120",
  isins: ["XS0971721963", "RU000A0JU4L3"]
});
