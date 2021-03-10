class MultimediaFile {
  constructor(
    public createdAt: string,
    public modifiedAt: string,
    public name: string,
    public elementType: string
  ) {}

  uploadInfo(): void {
    const information: string = `${this.name} ${this.elementType} ${this.modifiedAt} ${this.createdAt}`
    console.log(information)
  }
}

class DynamicFile extends MultimediaFile {
  // duration: string = ''
  constructor(
    public createdAt: string,
    public modifiedAt: string,
    public name: string,
    public elementType: string,
    public duration: string
  ) {
    super(createdAt, modifiedAt, name, elementType)
  }

  stop(): void {
    console.log('stopping!')
  }

  pause(): void {
    console.log('pausing!')
  }

  play(): void {
    console.log('playing!')
  }
}

class StaticFile extends MultimediaFile {
  edit(): void {
    console.log('Editing!')
  }
}

const mFile = new MultimediaFile(
  '13/09/1995',
  '13/09/2020',
  'test.txt',
  'text file'
)
mFile.uploadInfo()

const dFile = new DynamicFile(
  '13/09/1995',
  '13/09/2020',
  'test.txt',
  'text file',
  '05:00'
)
dFile.stop()

const sFile = new StaticFile(
  '13/09/1995',
  '13/09/2020',
  'test.txt',
  'text file'
)


const mFile2: MultimediaFile = dFile
const sFile2: StaticFile = dFile
const dFile2: DynamicFile = mFile