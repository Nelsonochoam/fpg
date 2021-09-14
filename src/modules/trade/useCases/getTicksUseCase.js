

class GetTicksUseCase {

  constructor(tickRepo) {
    this.repo = tickRepo
  }

  async execute() {
    return await this.repo.findAll()
  }

}

module.exports = GetTicksUseCase