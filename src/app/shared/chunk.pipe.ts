import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'chunk'
})
export class ChunkPipe implements PipeTransform {

  transform(input: any, size = 1): any {
    if (!Array.isArray(input)) {
      return input;
    }

    return [].concat.apply([], input.map((elem, i) => {
        return i % size ? [] : [input.slice(i, i + size)];
      })
    );
  }
}
