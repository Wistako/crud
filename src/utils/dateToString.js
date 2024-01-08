const dateToString = (date) => {
  let strDate = date.toString();
  strDate = date.getDate() + strDate.slice(7,15);
  return strDate.replaceAll(' ', '/');
}
export default dateToString;