const SingleBookDetails = ({ id }: { id: string }) => {
  console.log(id);
  return <div className="text-red">{id}</div>;
};

export default SingleBookDetails;
