export const config = () => {
  const { HOST, PORT } = process.env

  return ({
    host: HOST,
    port: parseInt(PORT, 10),
})};
