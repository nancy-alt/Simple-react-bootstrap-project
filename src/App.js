import "./App.css";
import {
  Button,
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Form,
  FormControl,
  Col,
  Row,
  Card,
} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <header>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                <NavDropdown title="Link" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#" disabled>
                  Link
                </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <main className="my-5">
        <Container>
          <Row className="px-4 my-5">
            <Col sm={7}>
              <Image
                src="https://mdbootstrap.com/img/new/standard/city/041.webp"
                fluid
                rounded
                className=""
              />
            </Col>
            <Col sm={5}>
              <h1 class="front-weigh-light">Tagline</h1>
              <p class="mt-4">
                Nature is made of everything we see around us trees, flowers,
                plants, animals, sky, mountains, forests and more. Human beings
                depend on nature to stay alive. Nature helps us breathe, gives
                us food, water, shelter, medicines, and clothes. We find many
                colors in nature which make the Earth beautiful.
              </p>
              <Button variant="outline-primary">call to action</Button>
            </Col>
          </Row>
          <Row>
            <Card className="bg-secondary text-white my-5 py-4">
              <Card.Body>This is some text within a card body.</Card.Body>
            </Card>
          </Row>
          <Row>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img 
                variant="top"
                src="data:image/jpeg;base64,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"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Card Subtitle
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
              <Card.Img 
                variant="top"
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRYWFhYZGBgYHB4cHBkcHB4eIRwcHB8cGh8lHh4fJC4lHB4rJB4aJjonKzAxNTU1HCQ7QDs0Py40NTEBDAwMEA8QHxISHzQsJSw0NDQ0NDQ0NDQ0NDQ0NDQ0NjY2NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIALcBEwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQACAwEGB//EAD0QAAECBAQEBAQGAgEDBAMAAAECEQADITEEEkFRBWFxgSKRofAyscHRBhMUQuHxUmJyI5KyU4KiwhUWQ//EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACcRAAICAgIBBQEAAgMAAAAAAAABAhEDIRIxQQQTIlFhMoHhM5Gh/9oADAMBAAIRAxEAPwD5NMSkh2Olaj+IkleX9oOxr6MYzCiRQ/1BGVKgALnzFIh6EUXNGYECt6v97Qww3FyjKUUI5C/9QvMgkh1C9eXv6xqnDpU+Q2u9P7hNoA+ZxtRUFDwVBIBJcB2FdA584LwfE1LX4x8QNahxUnd+vKFmGwBLXA/c4Ibd+VoY4bA1SXzVuNWqxGhY6fxETkqqxKws4jIrOgl2Ds9AC413+vKKY1aiQUFyonvqK66+RjCbLGbLQg2ZrC1db94ohZqkNSxCQMyRtq2l9BGKj0wsoJhZiGZyajYPTtG0vFIy5EhizppdQDVL0HJoxxJZRBAL/EfsdD9o6lDKZFTufCaVFzs4Z41UbQrHnB8YgKSFJWoAiiVZe5yjRgwra8fQJMoqQlRYkhy1n5R8xwGNKVpKBlIYHKcpJJNcxfkPSPZSOM+AGW9EEBJSQPCSXIJLliGIoSa2jp9PLhdkTjyQ6XhoxXIgvAzVLBUQnLRiDV9QRVm66xqtEehGfJWjklGnQoXIjJUiG6pcZqlRdgkKDIjn5MNDJjn5MFjFn5MT8mGf5MT8mFYxX+RHDIhmZUT8qJbKoVjCwBiuJhBZCQthUvrsOf3hjxvEpQjIQSVf4qykVoQWOo9I8niUgq8DgE/EoFqbm4P3jg9Tnd8Y/wCTfHDVsImcfmLLoomtNQ9Q+ht6npGczik1SSSugdwAXsQ1uWmxIjD9KpBQ91BmAAdBsS7EvRiBoY5OJUWSR1LsQPd9xHDKTuk3/wBmyihTiOMKqKkP8KifTaBxxAMxSR0276xpiUpcg0NwwJdxA2HUgLBVYEuCH6eu8dChFq6EN5LZEqBdHO5qXt1HlHEygGJCa6PYfL6wRPn5fTKmxIt4R6/xAClvUfBbRn5djHLTYzmIkBKQaZkjRmJIo777dITKTc0fZ3hjPxIZDCla6sDVtg7mFy0KzMB0ppUx0Y00tgdTNASRqzAd3PvlB+DyqJIqHTe2pNG5esDKwIBGZQqWYalwCB0J9DDKTLCPCmlHvvr9PKCbVaADZ6l/PakSMTM5HyiQUIGWsEhh6e6xtkIbK7Go5P01iiJoZlP/AH/UFSqgtd7k+o2tFt0Js1kJSoUAKgDu58rtzrA5Wyw6mAOlW6aGNznTV0lwX2OjHY9POMv1KiqiQGL5QAEhn0tZw7xKQhl+uATRWbw5WJNurbknyjkvidXYA9KPZ4FQlIKfCFFXiIdwx0FaP6U6w8wuCQrOtGZFx4gWqw3uKxjJRXYbA15TUaguAe5oH+kYpU5SpWbkNlXoUhhtFZqVgZMo8SsoIZ3uWIJcNTvGCperszi3n2BLRcUhBiwFJzs1aFxoK8zv31iIdwTUM93pzIPt4HQry7b84YmYBlUkkEZnArWr6c/lFfyKwKViciqAXBItarU0hxL4pMdkqypWAixrZ06kp5dLWjc4YLCQlAWtVHqSpJFSkBhnFKvfvAc7ArlFWYkBJDpJaujgGtxbS7QKSktFUz6L+EpqSFy8qgoEqchgoUSCNqAHv1j0P6aPBfh6WtMxAEzL+5OcgAlnckEgvQNdhH0pKCwep1IpXppHXhyfGvoynDdi9eFjFWGhxkjNcuN1Mz4CYyI5+RDNcqKGXFcw4i78mIZMHFEUKIXIFEBMmK/lQeZcAT+IITqDd25fP+omWSMVcmWoN9CnjuDfKvKGSGCmdiTYh3bmOe8eVTiihKxkBrdiKhg4IoQNvKPTcU46CClPwFLFwHc77aCECsM6Dlqq6hUOdG7C4jyM2WPNyizojFpUxZKwxmLClJITdNX1DMXcCCp+VqJJy0oNq02s/c9Y3krehqqxDGigNWvcefOl0UQkqYPVg5rpo9A57xzObbtjPLz5AKQWA6lvMaGBihIBUHChUDR+8P1YUrKhUgElgP8AJlVL2cvAsrhijmOqTqzbUULF/pHZDKq2wQnC8ywuYolubH0BjbClUxWUAs4LpDAPSuw96NF5sg5iCNN6PrXb7QdgFIlpUc2YqISm4D0alx8RfpF5GlG0t+B1sXYuQlKkgJHWpPfnWxBvHMDmKVry5lOAwYMQNz/yHkYa4uQF5kfuLVJoSK0HU+kY/lJlkS01AClEk1DECpAuyugaMlPVeQlGnVi5CMy0l0nLmJ2JfR+fT7VVMZKlHkOjA/Yb6xTBHOtYS2XR3oCQNeWkFS0OlQplzVfmAoubWaKenskUApGr+USNkYSmvkYka8kMWhUN8DLzByVO1AALUHcX9LwslBJNX989IeYGSktlUAQC9WL6ONU/aDI6QmcwshIWHIWn4iAf2ndNi1CRyhtjeGywkrBIYBgG+JqM7afKBsHgFoV4hmSxLPsH76mDVzlGi0jkdQL21/mOWcm5JphWhfiDkUCC7NmUPCCWLF2L9Q9maNJaloCiMzFT5XbM7P8AtsQzNG2MkoysApCaeNSXAJrfQF/WOqE1BAXkWFAa96kB3LkORryh3aJOfnBS1ZkfCAoJCH8Shcg/DRgecBYjDJCSUrKXAAFQQVf5CoYq1D7uY1wa3XNWxDKIUCw8JDVceFjrT7ZY4IUywQdGZsrcnJ1FaaxcVToLZkrDql3KTuwta4Ndo0kTtHA7dmrbWM1qUSyqtQ5WFKN6/OOZFAuEkC4cV7mNEr7JD5WIqaNXQgDfTTTodYczeIpmrSualK1qZ8ygEBQ8Idg53rQ+cIUhiAoJcVsGOocN0h3h5P5iCs5VkOfy6PQAUbYPTkLxEmojTd0O/wAMALmZChEzK+bxFRKRU/lsxIFtekfUZJC0hQsdwxHXnHxzhMlUsBaFqlksHOXMwJYEh6AUPk1DHpMZx2aVArWVMkAtQKA1YUc3jbHNeEVVo+hfl0dw28UUkUqK2rfWm8fPzxtYQHWwIIPiZwb3hVP/ABOEKSoTQpSD4WdVBX/i3fSKWVt0kJxPqapUZKkx8rxn41WoBPiUkACqmqDtV6bxX/8AcnooLYBh4tOYpFOc0roXBH0xU1Ad1ppeop1gXF42UhOdSw1LEG/ePnZ/EMpX7iCf8gfUhx6wWZoUgFKkrD1IYjprzGkc8/VTj3EpY0/I6xPH1lSvywnICA57768o8/iVErzLV4ibnc9Op91jmJnuhh4rOlgOlICTMC0pzKDagUILlnrS2jUPKOKU55Ntlqo6RosmuZi1g7Uahe41jkuaXSSkVDgu92BFdDWsRIQpJWkEV+JgGqHY+9BEMwqIZzzZqh3BYdf7ia8CZuuQSQUKFKKcEU2fk1B94ynYhKciFb30dyANz/EUC1tlBIH+z5X2zN83cwHjpTNXmWLgNlI/8k+YhxjydMTb8Gk1aUKUR+/KQHNSk1s50HWFc2cpailyWq1m8+cH4acUkqR4gQmoNgXa5ooU8+0VxmLUtGZmZI8RLEa93+20dEHxdULkATFMkudQ5IFLtS4NaQCls6XOUEuFAbagfaNhhyokBBJIpfdx2g1PDgB4gRUuXYuKZaUZ2q+8bymkO76O4qc06WCWNFEkC1+RBpFpygpRrZCzX/kQSw1o3eM8b4lyyBUoKRtYGmreJiesAyuHrJWpKkggLSA92LlhzqwPXSMYxTSKpyYFw1JSvL+4kjKOrM/VvKHE2YlKXDOpVbM/hAfmwgPhXDFBSVKKcoJVd1HKKANcO3LzgrG5cqS1XAI3JIHl1bSsVPckJprsDQogAAW7xIulQ/8ASK/9gkMej+USGFC1csLIs4FTqat56xth1FAYUO+5u4r7aAUroOVPfvWC5M0as4tGrTqiWOcBj15fEkkaqINtwzux+kHjErJypKaD4QK7MQz6m3lCVE1TlQyqBuKk9tf6hvwzEJTnB+OpCiWJBcJCKM1upLxzTxNfKgTbN0kgIK0skGlXAcBizGxLWe+8YJSStSJTk6lYSWFrtb12tF04tRSp1kkUD3SAA52Ohu/aLoneIuFZWqXqWrQgVBpW4NiTGfGS8AxYcMoLWkgKUGWWHhdgR1ehboYkpKRcKzEEdSSwfZuxekD47iMxKlrSFIMzKACKpCQmtquzf90LJuLUtiogquS3WnqfTaOlQb7ChwuYkEpOQkEjNcVYFyRX+Y3whSokqBUQKJApQuSTo1Q/PlCFM9QzbKYkXfnXrHUTSDT20a+1oVDaetOZVRQlmY1eziDOFrAU6lMnUvlYMb6EdxCQCj6E305WtrG6J2UEOXalIJY+Uasmj2c/jeHloSwzuAwSX31Jp38o89iuMTJqvAMgY+FIzHzZ/LeLcI4MpbFeZKG01sdqdTuGvHosFIlpCvy0ZVAXAcm9zrrGcHjxtxVt/wDiNdvsQYDg61q/6y8gPcnvaDzwaWhZS4UBXMduzbxfEzXUS96+wLRmZ5I5D3eOtRd3ZnyGWBwUlnSkEhgXAIJOwNdIri8BKDulJHINXnAEmcoEM7Avy0gqbiCpwb+nblGEsUuV3oakYSuAyFgl1A/6mg5lxyPlCzG8EmyS6FuLhiUmm4t2rDbALGfIczVJKXsNmvXlDHiEolSTUBhz+dvfbnnOWPJV6f2Wncbo8hL4wpLiYkuzOKE/SDsFLE0ulQGajEuRT+/KNOJ8PBejuHG+sIJktco0cBQoRtY9I2UYTVrTZB7JctCE5EkuC+Y1bfkIrhZeRDg1cN4Smjmparv8hHl8PxdaHzkr6nRmob7QzwfHQSkLBqbu9H5xzS9Nkin5KUkEcdxKkIShJLrcmgqAx3fb1jz83FKUUPUJLt0yhvJCYZ8cxqFrQpCgQEkU3Jq/kISTA9X7R1+mxcYJtbFJjDg7lTFYHU8tOw82h7hVoWkhR+KgBNweQ+2l48imhjRE9SC6Sev22gzen5NtOmJM9jJmJByhGUswrVQTS4qRavOK43KpCkHaoL+ji9vOFmBxqAFKClOoDwvVwCCxZ2t5xeZjAJQWtJP7TcEvSr3FPQ3jzpYpKRqnoU4mZKUgpGYEM4O1HbnRnbWC8HJWpAzJUCSaqfMzhtPCO3oYylcOSsoWSrIf2sXJLMHpTnDPET8tjrlYDcpI1q4BrsesbylS4oIugTMlKsjqSS7FxcFm5MCH2rCriSqkMWzXHlb1g4oXnBUoHKVAVGbxUpWwDdOcYTknOpIT4fEQQahixr0rYXpd4qKadv6CV9g8okADK7aveJFZ0tAUXmgcmPn3v3jkXyX0TyAlJCTUVpXkYpNlKBcVF3H8Wi0lQUEg9K/fQQVLC0pIBqNKnT5Edou6IXZnhioHxBnDpU2uh/loORLcHMtlID5WVUXJT06C0BjFUZYPIG4sfiNbEU52g5LmhXT9qurnsfuYpttV0O6KYtBD5STqAbpoxY+d+VIDw+NIpnIFaae6xFpUDlFSNBsadCDEMwliaKTR7UhxjoTYStBmMxZaWY1GmtKm0KiKnev1hmiYbgs0aYlCVpKksFG5YVbn+33yiugTFslMclu5I68vKNkSz/4+rCMUKIcC9jzD/KLAIEsgA0rt6ONHtDXAYRPxqpqH1f6fN4WYdNXenukOULdBHwka8v6iJvVClKh/wvEXevbbfT+IorFFC1VLLdjyP9wrwWLCaKjuOSlPjB+I2enOnu8YY8SjN/ouTo3xSg4YNEMwlIDinOBkzUqAc10i6Ultm5D20dy6JCVLIbMX+Q+UWWaPpGQmBq39It+cGZw3aEBJc7KuUxYZlZriji5GkPJ+KJSFA5gabB+poTRu+sebnrDpPPzqD9IY8MmBTJyVCcx8RAOooLm9I5PU4k/l9GkZao3nJSFZV9SRXlevyhbjspOVKc4UC718v8T0/tzNddG8uewNzCWcBmKVZi9hRhzLXLfOMcG3sbPPT8PlPyL2POM0939+UOcVLGnwrdn0+TmE86UUqKVUKSx19do74sR1FjT+axVSr+9o6thQcnfvtGSddv4ixFyq3vb+YrWvX7xdJDV84wUr38oGCGPCg5IzlJFi4ArQit35QyxwK0FJzIIFg7EAs5G38x5zMbjzf3tHpeHTlLkjOS7k5lF6VYu1auG9Y4c8WmpGkd6LSpaimShIOVISolyxILbVBoWox2jUyikpz+KxsACdWawrqf26vFf1XwJQoAJNBUk7A7CoD1qYIxi1JSnKQFKYgmrsKUqBVj/7Y5t2jSMd2LVgBaluSU51JALVy60IJttXyhdmzKKnoUORb9yRrWl9bc4bLxGdYyqJzEhWg+FSfK9GuYXTUeIliAEgFnoVELZ7lRFb0aNI/X4TJO/8CfHL8araC2wA2iQb+lmGue/+8SNOUfsimKMO9Q2loZyFlXiBY/CdOSdez8hAWJSAUlJ+KvJ/ZjqFFl7jV7sfWNJK9iewvHMcqyA7ZS4vtyBvBOAWlSWqToFWJDmhfZ4CxM1WQ1HiLjcMR6RzALIBU7A6c70hJPiLtGuJmtmuK0G+l9P6gdGIdiw+9dTeNcYjwhQqXc/3q8AIJpy9iNUCWg1DjoR/G3t4Kw00pWS9fk30gJBeoJG4vUmLoQKnXn6w3sQStYzkj4XBLebfSBpzKUojex5bfKu0aSVOQAzM57U+0bTqKeniD2taxikMJweHW7keFjVjUM2gMaynSrKp0n1rahjvD8UAkjNRwb1pAuLxSiomjWHTnWkZVJyaZDVm+HCQbmO8VmnwG48q+2jLAKCjzaMuIJOZiXGh2EXH+iaLSZ/t4YoL/ubaEqUlNRBMmcp9n96xsMYmZ37ARM7bDlGIKWZ67xRVLV6QAFp+EmlCGD7u9Nvesb4fGBBBFCCe6SB6UI7wDMChLzOzqDCxo9tSPtGOcMN2I7EgxMoqVpl9HtsTPKSLMQK6Cmu38wqSpBIUhWZYL+IlqvR617+cZzuKhUpBSo5gAFCulKkGxZ/SK8OQteYoRV76AnfkBHBixOKblopvZnjpQKQp0u7eH/KhPYOB1BhZxjDuETAKVSS1zoSdKFu3KHJwC/EVFKUp6MSWsQGZmrAiQlaVSx4yUEg5aOmqa+dxq0dMGq7BJ2eaWY7LXEUnty6fWMcwAMbCNVKuAaRktVt40XuIwzV8+kMDfDIUtQSlnVRzYaueQDmPV4DBJQhSElRBsS1XrRmjzfCp+VZGUHMG7ivlHoOHoUpKwwKVWVRxVzzD09I4PVSl14NIrVi/D43LOS48CiEqS5BBLDMPdWhtjSlKgpiSygLMa1P/ABbL7EeZ4nOKZqgpPiCqajRuo1eGUnGpmpWtYIUFAZQXu+9WcFz3JMS4/FNFwlSo1wM0lRKi5awpTMAaEhrijRglClIUxDrIVU2ASkVYasftduTMVdDAKd8yhUgClRVr7R2WSCgI8QJuaMK5u7P6QcXtoTjbsvnGgH/YY5HZssOcpDdfP1iRhoKZ5NcxzygiXiBlKasRZ7HfnYQI/KOpNbR6NJmdBippKAmhax1ANx0MSWsjwtTSMkrI0HaNjMUrQNFJJAdnKUzNdvSA8zaf3Bc7Makmn1gXIIHXgSoumYoUIjcqOrb0aB0SYISilIAdGklVi52sYY8PnJzDPmYPUAHp8QYesL5KKtyf6QSujB7gn371imMfTjINlJcs/hQNC7sivOBphw7KzEFTXAq/MgCveM8BKdBI3Hf+I5MwJSvKBQh/OMuauiHL8L4dEn9ud6WLB31d6QLjFocMVU/2/iNsJKOazxziWFWSnwHXSGpfIXfgFC0lmKvP+IJlIS91f938QPLwiv8AEwxlSOUa2BshaGt6/wARFLGg9YicH/sI0HDydRBaKpmWOlhUtJp4SQQ9a2be0Lf03t4bTOHEoNf3J/8AtGX/AOOUw2FO5r8onml5G034NOHYNSZa1eIFRTl5/EDXlDXAYyYgLQFZm/auocNmppybyhtMwpZCBZKUpPYD6wr/AEaARkUVEmoerh/pHGs6yWmaJNdCjif5iyc4Qcvwuz3plDjMbBiLaPGPC5UwBa8yqEOEuVEBjVIuC7bMDXd3iVJQgDV3INXoAQd6j1iYCSkKK0qUkJS6q6A066DvG3P4jSVnkcdIzKUtAUEqUogEGjk6h3hfNkK2v1j0OKSFrUs6knzJMCLkp0EaqWiXHYmKevv+oooH28PjIG0Zqkh7esPkLiJ0IJ631+kem4fxE5AmgWmziiwxvsw84Bl4cFQSEmvM2FzD2Xw9BQhkJKzYuaM+bMXbow0jm9ROFJNFRixXiJDrTMBKS7lSh4UGo+KlhUAHTtDHhRlqTmSCU5rkfER5V17wFPUiWpPx0ICwHAJd7VDN849HgeJFSKupNMimCHN2pRxyAvHLlkuCqzSEY3sS45Ckl/yzuFMWBtSrdulLQrnTiCAHQ6mU9SzA0qB2j1/6hJIQPiUf3UA7tWrexGauBhsxAJqRQGpuzuWpBGfFfaNfa5fyzzWQUZINBUmpprSJDlfCy9Uq8xEifdX6R7Mj50pLGCpTZVf5AMzWt61PlHJygVACgSGjTDyMwNaEivrHoN62ctnJqQEDm5O72Ha8WwrENY37ezG+IljLQDxKfsI34fgzVRH8+y0SppIPAJiSMiQLux9+7wIgfeGE2SS9DQ+UYiQBr3a3ukaJiKAaDzi6HqGiyEPXaCMNL8Tm2/rDbAyTTSoiypniUW5fKIpTqKuYbpA61EqJ5xSZQzwk0g8q/WCZcxV3NNz0hfh1aQxQjMltPZjGVJmb0y+CSsn4iO5g3F4kMA6ioGtd6096x3hyQK03iYnDgrIFkuXGtAXiItOZSs1kYlNHfvBaJrwkngAxqggB/rHRxHY7ADR3IGELM4LVAjb88swUIhopM1xIoBua9rQRgcMVFHiDEFQS+tEj19BAhUFGUl6qUXPdLdrw8xGGCUpCE1Ac9i/zbyjlz5eKUfLLSOqnLSrxH3b7wlWrxlQUxTXro43u8MZys5BJyinnf6mFOPBSoBPiF994xw0nXkDOb4lJQ7s4fzjbEqMuWQaKWcrEaC/T+IHw3hIUoEMoGtKAF/OkDcUxZWsl3Zx1398hHVbul0NLyCqNz790iJN4qr7XiJVF2OixNbDpGZVyiyk0feM1GHYqC+GzUhbFnUMoOx/m3eHGAWpKVlSRkFdqmh7U9I82ghwSHA035PHpMLikrQtWgcB9meu9R6RxepXmikedx4K5pzkIS7U0DeH6VhjgJ4CCpIS4UzVYtto1jajdIXTpalTEJIzFSgG08RZvWGuKIQpaGypJ8ATsPCDzAYc9Ib3FIEvIHicSVLLnKk2TvSyTsDV+ccTjJiFpCFnMpR8NWLgNmHPfSMMamhUhIACqrpd9RqNdo7+RLWUhTlJoFZjQm7jmwHul8YpX+D6HB4pukv0iQrUlSfCVClKkvSlaxyMuP6PnL7PLSEPDJGUX+ED1avXbygApZgPbxomZlozx2tWcvk3nTcygUjKAGApTQ+v0g/D/AOIJYXO/KAJDq0anmf7hpICglSQj42L7VIhSVKyqsXrWp3s53ip0DuTV/vB82UVuALD05+9YrK4QujiqqAa8oI5ElsTRhKQSQAb3eOT8UnKpKaEENzu/0jWenIEkH9xBbRgn7+kLwmLTTBI1lzT8o4hYN9qdY4gRdKa8oqxl0BiDD7hyAsdGfvCRCd4JkTikuPfWMsiclrsfFM9HIwOdPgNHb0g/AYUIC3YkggA8nEd4Di0LohLEM4ccqgbO9ecX4mBmcOKaG1yftHDinOU3CWilFJWIsRgyFEAWpFVYUpFQYY4UFBzrDgvGc7Eusqysk6cg2kelzd0RxQLIwxURShIFtY3mYTK+8MOHzEEZUhlEBXdJjs9OYkkNQ0jmnnkpcaKUUAcNwoK0qUpgCS/anrD7ieJUFBFqAnu0ZcMlBrXNQ3lHOKjMQwa4B5e6Rw5sinmV+DRRqImxuJJOVPu8F8KKFrAUP2kPoFfEH2oFCAfyDV73gdXFciFy0iqjVXp9/ON+PJVElLYT+IMcHCEs6SXIs+nkB6whBMVBeN5OHUogAGtH0ro8bQioRooqFEg8m+sU397feDMVg1SyAuhI+p+0DERakmrQFQvSOKP2ixEcIvDsDiE5jDbDLCJTF9dGvb6xjgcAvLnag/v6RbGk5CSSSaAd3H1EcmSam+P6FGnDkAzsxBKHLEB6jxPvpdt424hKzKYmruCeai4HkIBwcrwpyqUheXMz/EFFQSws38wx4khxLUAVFISGfdzXleu5EO1aiXHqhXw7DOVJVYBiH1Upn2oyozwSEhIzVyuC++Vx842keCZTMXcKfQAFY984EmL+NOVioJX0olJHoYppttXrRm9F1KWa1/qkSMv1QPLuYkLi/okQIWqCJMt6mMVTE+FgaCr6n6QThiFUAOlXtdz72jtl1ZAfhmBBYkfx5N9oecNUEFWZwFguCG8JvXerd4XYbIl0sSwNeYDnt94JXPllgHL019u7Rw5JOWt0UhogYcpJGYA7DVgzBnP8GKSeJH8wBaPEBlDgioJ86kVgT89KQmjKBdrBJIA8qGvOOLyEq8TsnNTWlg2rkV5RgorzbG2WxOFQZ09ClDKcimAaoAJLaVJtvCfE4NKj4KB6OaXNqbAHzjbDoUorUcxLs5Lm7MSeRjcTikVFGIDjXcfOOhOUemSwD9CoFQKTmBajNShfm5T6xphsEFvUDqW5fMiNv1jU5+I6mr3842GKQFWFrNavzjTnKhoDm4Fac+oSbvS7U3jXAYBcwlKdjelq3jVc7OogWJ82tHsPwzh8ksqW7Opk6ghw1N41hyloT0efxH4ZxMhKZiQqqX8GYlNtU/PlGMjjKnaaH0JsR1DR9P4PxNBljOsO5+K7d60tE4n+HsNiKrQAohswv5xv7aexc/B5zB4ZE6XmQUqABJFNOQPajx2b+H1laUNlz8tK6UOgs8Dz/wABzEKKpE0jZqFurjlFJU/ieGpkKgNSjMWG6kVHcxCxJDuxpL/Di5YCmBLdKl9CBy3gmZwZVDSo2IA7qA+UJZX42xKSUrl1Ogzb7LcxxX4xxi6IQQNGRXzYgxE8EJbdjTaD14ZSCWBpyLX5wBjuIoCRUHo1GgRSOIz/APNl3NEjuwhlwr8EVCsQskirAuKWq77bRzS9ApSuyvcSWzyeMxqlghA8Jo9dNq/SJI4OSkFV1C217+Ue3xH4fyZ8ibl38aiX5kH5wlxbpLC4oeW8Z5XPF8Yql9jUkwHC4ZCEMR4iXNtBT5mDuHlIQkWq/Ui3rAy1vmOxA+ptECfEnYN9T9I5ZSlK7fYWDfiAupBP+J+dISLh9iMLnS/30eFGJksoBvdP5jqwTSio/QWZYeXm9+XyhlwzhwWy1fCDUeT+kY8PlabttsY3nYr8tJQL39tCyTlJuMQsa4dSSpYB8JGWn+pLfOF3E8OwCQbF3Owt84Hw3GACXSf22rWO4jFpUlRNw49+UYrHNSsdnZwyrw9HZKACPX79zHZ8zMpCbAhB70/ikDysYMqHNUF/kBW8cxKDmRyWw7EAdI2S2rFezE4kmZO/yZTDchKvKwgFC/EoKqfy+jOtJIPQPFkTf+qCR8WYv1zff0jKYf8AqLPIj/5D7R1JVr8JkL8StlH+fvEjXESgVHrv/MSNbRAvQQC9+UH4JQVRmoXr75QsjeWtQFLRpKNoB5gEMfEu1kg18u3yhnOw6UpzpuGLFtanoftHk5c1SSFa/aNZmPWq6iRZnLeUc8sLcrTCx1jZoVRy7UYahzpF8DMSjxGrMCWs9C2/9wkXinUGoPYhjh0qWhVUlKTYu5qTcc1GJeOo0wsOw89lzAl8r5uuz0sLnpGfEpqiQQPCGajOS/t+kBrxYcKHhzFSVNRncjo9YCnYlSnUSRRgOlB75QLFuwsYTFAVQQS4bv1jKXVVTzJfSAJSjfyG+0bsKu4Z25kfzGihQWNEKyhwUqGcjK9S3TQv6Q3VxFa8pQChmdT5qeFixGjCvOFeBkMpJUCUqUzHVTKarhmY2O3Y/ifEUrWVIBQ6srOPEMt6ftsRS7WioxJchjwKfmWM6lKDMkJ1LJN7s5JPWPoWCnkIS4YtZzQaXq7NHzTAzghYSheQNU1AdOzAmPaKxb1BjqxRtGMpUz0H6mM14hJuAe0ITiucVOKjTgR7g6mFCi6g5YB3IoKix5x0TED9o8oRHFRz9Vzh8Be4eg/ViKHFQhOK5xQ4qDgHuHoRioQYrhZJLKJScxJZLnZ6p5mKfq40Ti4meCM1UkCzNdHn8TgF2yFiHNH6ktA4FQHNB8PRq9eUejxOOQHzAEkB3aiXqS+keUx2LScxQ4D9LZS4vePI9R6VY38X/o6ceRy7QR+oLhKTY+Klxy51is1CTkUWG9B709YEkLoz9Dzd41Mx0p2FKUtbzAjk409GtlFALUoAUGUdjX6wmnS1OogUrGy8WUPW5Nv9aD5QGOIKD1bMamOuEGugTItfz+5i8zEApA5N3qfnC5c2sSUsOH3jfgOwrEJIKQLs/vyhhhseSElW7ltGIMLcVMOcKGgpyb+Yyl4hSUmxBcsRZ2r1dvWDhySsVjUJCl5rBlHzP2eFeLmKSVJG7dRp75xfh2L8RSQ7pIHIsT77RbESwyTqoivdocVxdMTMky3q/ptSJBGESooFN/mYkUAlUki8dSSA/aOxI2EWQXvECwNNXiRIQEB1uKt2/uNpWIyhQyu4IFbPqOdokSBoRmACDv8ASIZhZtDeJEhAbSBR1FhYUerv8nguVi6uSXZTBgQCPhvSjDSORIBF8VxVaxlJLMAxqNATyJL+e0VYhQc1cVGgLH0jkSJYJHpOBpSVOSSUkmouxIr3UYfnFxIkduJVE4sj+Rz9XHFYuORI1IMlYuKnGGJEhAcOMihxZiRIAIMXGicXHIkUSwLiOLUCkgApNFDevvzMC4HiACFSwgZibF/hbd2uAOkSJHnZv+RnZi/hAWOUULSQXzAEsGAJrToQY7iZgUBpRz792iRI5MkVyRtHoTLmUZ4HmTA1IkSOiKNDEqgyVhnTmQXynpbqekSJDnpCZthy6wTqfn/RiLSMy6f/AM27uIkSI8gwLAKZaTs5PQAk+kG4pBATVx9FN/MSJFS/pCB04nKAGsOcSJEiqQH/2Q=="
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Card Subtitle
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
              <Card.Img 
                variant="top"
                src="https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111-1500x1000.jpg"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Card Subtitle
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>
      <footer className="py-5 my-5 bg-dark">
        <Container className="px-4">
          <p className="text-center text-white">Copyright &copy; Your Website 2022</p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
