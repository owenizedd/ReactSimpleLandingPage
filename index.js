// UGLY CODE For quick development
class Pages extends React.Component{
  state={
    page: 'home',
    login: false,
    showNav: innerWidth <= 768 ? false : true
  }
  showHome = () => {
    this.setState({page: 'home'})
  }
  showAbout = () => {
    this.setState({page: 'about'})
  }
  showPricing = () => {
    this.setState({page: 'pricing'})
  }
  showContact = () => {
    this.setState({page: 'contact'})
  }
  toggleLogin = () => {
    console.log("YES")
    this.setState({login: !this.state.login})
  }
  toggleNav = () => {
    this.setState({showNav: !this.state.showNav})
  }
  render(){
    return(
      <React.Fragment>
        {this.state.login && <Login toggleLogin={this.toggleLogin} handleChange={this.handleChange} />}
        <header>
          <div className="home">
            <img src="logo.svg" alt="" className="logo"/>
            <h2 onClick={this.showHome}>HOME</h2>
          </div>
          {
            this.state.showNav &&
            <nav>
              <a href="#" onClick={this.showAbout}>About</a>
              <a href="#"  onClick={this.showPricing}>Pricing</a>
              <a href="#"  onClick={this.showContact}>Contact</a>
              <a href="#"  onClick={this.toggleLogin} className="bordered-button">Login</a>
            </nav>
          }
          <div className="menu-button bordered-button" onClick={this.toggleNav}>Show Menu</div>
        </header>
        {this.state.page === 'home' && <Landing/>}
        {this.state.page === 'about' && <About/>}
        {this.state.page === 'pricing' && <Pricing/>}
        {this.state.page === 'contact' && <Contact handleChange={this.handleChange}/>}
        
      </React.Fragment>
    )
  }
}
const Login = ({toggleLogin, handleChange}) => {
  return(
    <div className="modal">
      <form>
        <h2>Login</h2>
        <input 
        type="text" 
        name="username"
        placeholder="username" 
        required 
        onChange={handleChange}/>
        <input 
        type="password" 
        name="password"
        placeholder="password" 
        required 
        onChange={handleChange}/>
        <button onClick={toggleLogin}>Go!</button>
      </form>
    </div>
  )
}
const Landing = () => {
  return(
    <main>
      <p className="text-block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim voluptatibus eius facilis repellendus, aliquam fugit aperiam doloremque earum deleniti ipsum recusandae a esse.</p>
      <p className="text-block">amet! Veritatis corporis harum animi dolores, repudiandae non</p>
      <img src="metrics.svg" height="150" alt="" style={{marginLeft: '50px'}}/>
      <img src="lighthouse.svg" className="imglanding" alt=""/>
    </main>
  )
}
const About = () => {
  return(
    <main>
    <h2 style={{textAlign: 'center'}}>MEET OUR TEAM</h2>
    <p className="aboutText">

    We are all very different. We were born in different cities, at different times, we love different music, food, movies. But we have something that unites us all. It is our company. We are its heart. We are not just a team, we are a family.
    

    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptatibus, corrupti qui, ex rem vero ut quisquam eveniet optio fugit, veniam unde praesentium at nihil explicabo tempora voluptate quo possimus.
    Beatae, aperiam libero. Asperiores neque, id ab voluptatem possimus rem qui eaque nihil tempora nisi eveniet exercitationem sed mollitia deleniti laudantium fugiat cumque ullam quisquam et fuga. Exercitationem, quo eveniet?
    Odit natus similique quas consequatur enim cum neque nostrum. Alias delectus qui totam. Blanditiis, facilis commodi dolores sunt quos magnam in eveniet ex? Magnam iure consequuntur, adipisci eum ex aspernatur!
    Porro dicta optio ea debitis. Excepturi asperiores magni odio alias, voluptatem laborum totam eligendi nam amet deleniti esse quo ad mollitia obcaecati est accusantium aspernatur. Repellat sequi nobis atque sint!
    Praesentium, eveniet voluptatum eius consectetur tempora obcaecati! Vel ullam nobis soluta. Soluta nihil beatae quod, facilis possimus dolore culpa consequatur voluptates expedita est dolores aut ut ex quisquam odio maxime?
    <br/>
    <br/>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum deserunt possimus mollitia tempore nemo pariatur aliquam rem, dolores harum, dignissimos saepe repudiandae aperiam! Quasi libero vel ad aut iure eaque!
    Tempora, esse corporis debitis natus accusamus hic amet ex quibusdam quia rerum reiciendis reprehenderit voluptates magni, itaque molestiae omnis. Quos debitis, ea amet ducimus voluptas ullam rem velit porro omnis!
    Aliquid, nesciunt. Dicta architecto nihil vero? Qui ab exercitationem sit delectus similique alias fugiat, rerum soluta. Tenetur fuga recusandae at eveniet iusto nam est cupiditate harum, distinctio itaque dolore autem?
    Itaque ab alias eligendi natus minus repellendus doloremque! Eaque fugit reprehenderit tenetur exercitationem libero, totam neque vel quidem? Vero voluptate corrupti excepturi, blanditiis quidem tenetur nam nihil inventore deleniti voluptatum!
    Aliquid ex minima eum soluta! Qui reiciendis doloremque tenetur rem animi dolores facilis. Delectus, odit esse eius, maiores quis aspernatur pariatur ex explicabo quidem, ab vel repellendus provident natus doloremque.
    Totam eius ducimus saepe nihil reprehenderit sapiente itaque quisquam nemo ad facilis quia, neque exercitationem fugit atque libero eaque labore delectus eum reiciendis dolore nesciunt laudantium veniam. Possimus, quod rerum?
    Qui provident ut illo dignissimos impedit libero error, numquam quis. Deleniti doloremque vitae labore fugiat. Cupiditate dignissimos aut labore at maiores quidem est id, voluptas temporibus nostrum laudantium, placeat ea?
    Explicabo voluptatum porro animi deleniti labore, perspiciatis repudiandae laboriosam quibusdam placeat nobis reiciendis ipsam, iusto error? Nisi incidunt ipsum debitis quidem nulla. Similique, omnis vel. Deleniti explicabo expedita iusto autem.
    Eaque facilis nobis, rerum ipsa animi quibusdam in perferendis! Soluta sequi delectus neque dolorum, omnis aliquid assumenda beatae eius culpa consequatur, eveniet non vitae? Pariatur a dolorum consectetur veritatis natus.
    Voluptates vitae, impedit culpa aliquam reprehenderit tenetur? Quibusdam consequatur porro esse iusto, accusantium fugiat impedit nam ratione enim ipsa, a asperiores dicta alias laborum. Molestiae harum reprehenderit dicta tempore quasi.
    </p>
    </main>

  )
}

const Contact = ({handleChange}) => {
  return(
    <form>
      <h2>Contact Us</h2>
      <textarea name="text" id="" cols="30" rows="10" onClick={handleChange}></textarea>
      <input 
      type="text" 
      name="name"
      placeholder="Enter Your Name" 
      required 
      onChange={handleChange}/>
      <button>Go!</button>
    </form>
  )
}
const Pricing = () => {
  return(
    <main>
      <div className="boxes">
        <div className="box">
          <h3 className="title">Basic</h3>
          <div className="features">
            <p>- Mencatat Barang Masuk</p>
            <p>- Mencatat barang Keluar</p>
            <p>- Mencatat hasil keuntungan</p>

          </div>
          <div className="price">300.000</div>
          <button className="bordered-button" style={{marginLeft: '50px'}}>Beli</button>        
        </div>
        <div className="box">
          <h3 className="title">Business</h3>
          <div className="features">
            <p>- Mencatat Barang Masuk</p>
            <p>- Mencatat barang Keluar</p>
            <p>- Mencatat hasil keuntungan</p>

          </div>
          <div className="price">500.000</div>
          <button className="bordered-button" style={{marginLeft: '50px'}}>Beli</button>        
        </div>
        <div className="box">
          <h3 className="title">Entrepreneur</h3>
          <div className="features">
            <p>- Mencatat Barang Masuk</p>
            <p>- Mencatat barang Keluar</p>
            <p>- Mencatat hasil keuntungan</p>

          </div>
          <div className="price">700.000</div>
          <button className="bordered-button" style={{marginLeft: '50px'}}>Beli</button>                
        </div>
      </div>
    </main>
  )
}
ReactDOM.render(
  <Pages/>,
  document.getElementById('root')
)