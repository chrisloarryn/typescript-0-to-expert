class MultimediaFile {
  protected checkSum: string = ''
  get isValid(): boolean {
    if (this.checkSum.length > 10) return true
    else return false
  }
  set newCheckSum(value: string) {
    this.checkSum = value
  }
  protected validateCheckSum(): boolean {
    return true
  }
  GetType(): string {
    return 'multimedia'
  }
}

class DynamicFile extends MultimediaFile {
  GetType(): string {
    if (this.checkSum === '') {
      this.validateCheckSum()
    }
    return 'dynamic'
  }
}

class StaticFile extends MultimediaFile {
  GetType(): string {
    return 'static'
  }
}

class OtherFile extends MultimediaFile {

}


let multimedia: MultimediaFile = new MultimediaFile()
const dFile: DynamicFile = new DynamicFile()
const sFile: StaticFile = new StaticFile()
const oFile: OtherFile = new OtherFile()

multimedia = dFile
console.log(multimedia.GetType())

multimedia = sFile
console.log(multimedia.GetType())

multimedia = oFile
console.log(multimedia.GetType())

console.log('multimedia isValid', multimedia.isValid)
multimedia.newCheckSum = '8942136879012'
console.log('multimedia isValid', multimedia.isValid)