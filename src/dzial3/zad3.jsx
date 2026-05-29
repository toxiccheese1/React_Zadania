function DateTime()
{
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    const seconds = new Date().getSeconds();
    return(
        <>
        <p>Aktualna godzina  {hours}:{minutes}:{seconds}</p>
        </>
    );
}
export default DateTime