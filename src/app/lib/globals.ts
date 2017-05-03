export class TensorGlobals {
  public static cleansePath(name: string): string {
    return name.replace(/%20/gi, ' ');
  }
}
