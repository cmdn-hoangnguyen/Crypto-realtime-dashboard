interface Props {
  coinId: string;
}

const useGetCoin = ({ coinId }: Props) => {
  // const [coin, setCoin] = useState();
  // const [loading, setLoading] = useState<boolean>(true);

  // useEffect(() => {
  //   const fetch = async () => {
  //     try {
  //       const detailList = await Promise.all(
  //         coinId.map(id =>
  //           axiosInstance.get(ENDPOINTS.COINS, {
  //             params: {
  //               id: id,
  //             },
  //           })
  //         )
  //       );

  //       const detailCoin = detailList.reduce(
  //         (acc: Record<string, any>, curr) => (acc[curr.data.id] = curr.data)
  //       );

  //     } catch (error) {
  //       console.error(error);
  //       throw new Error('Fail to get coins market:');
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetch();
  // }, [coinId]);

  return {};
};

export default useGetCoin;
