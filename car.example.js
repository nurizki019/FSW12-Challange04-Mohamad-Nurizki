class Component {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
    withDriver,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
    this.withDriver = withDriver;
    if (this.constructor === Component) {
      throw new Error("...");
    }
  }

  render() {
    return `
    <div class="col-lg-4 col-md-4 col-sm-6 mt-5">
    <div class="card">
        <img class="card-img-top" src="${this.image}" width="500px" height="300px">
        <div class="card-body">
        <h5>${this.model}/${this.type}</h5>
        <br>
        <h6 class="card-title">${this.rentPerDay.toLocaleString('id', { style: 'currency', currency: 'IDR' })} / Hari</h6>
        <p class="card-text" style="height:80px">${this.description}</p>
        <p>With Driver : <strong>${this.withDriver}</strong></p> 
        <p>Tersedia : ${this.availableAt}</p> 
        <span class="d-flex flex-column">
          <span class="mb-2"> <img src="./images/user.svg" alt="" /> &nbsp;&nbsp; ${this.capacity} </span>
          <span class="mb-2"> <img src="./images/setting.svg" alt="" /> &nbsp;&nbsp;${this.transmission} </span>
          <span class="mb-2"> <img src="./images/calendar.svg" alt="" /> &nbsp;&nbsp;${this.year} </span>
        </span>
        <a href="#" class="btn btn-success d-grid gap-2 col-12 mx-auto mt-4">Pilih Mobil</a>
      </div>
      </div>
  </div>`;
  }
}

class Car extends Component {}
