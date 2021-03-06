import { CellMatrix, ICell } from "../../types/cellTypes";
import { FigureName, IFigure } from "../../types/figureTypes";

export default function stepsRock(
  cellsMatrix: CellMatrix,
  figure: IFigure,
  x: number,
  y: number
): string[] {
  const availables: string[] = [];
  const leftCells: ICell[] = [];
  const rightCells: ICell[] = [];
  const topCells: ICell[] = [];
  const bottomCells: ICell[] = [];
  const checkCells: CellMatrix = [];
  let checkCell: ICell;

  if (figure.name === FigureName.ROOK) {
    /** LEFT */
    for (let i = x - 1; i >= 0; i--) {
      leftCells.push(cellsMatrix[y][i]);
    }
    /** RIGHT */
    for (let i = x + 1; i <= 7; i++) {
      rightCells.push(cellsMatrix[y][i]);
    }
    /** TOP */
    for (let i = y - 1; i >= 0; i--) {
      topCells.push(cellsMatrix[i][x]);
    }
    /** BOTTOM */
    for (let i = y + 1; i <= 7; i++) {
      bottomCells.push(cellsMatrix[i][x]);
    }

    /** PREPARE */
    checkCells.push(leftCells);
    checkCells.push(rightCells);
    checkCells.push(topCells);
    checkCells.push(bottomCells);

    for (let i = 0; i < checkCells.length; i++) {
      for (let j = 0; j < checkCells[i].length; j++) {
        checkCell = checkCells[i][j];

        if (checkCell.figure === null) {
          availables.push(checkCell.name);
        } else if (
          checkCell.figure !== null &&
          checkCell.figure.color !== figure.color
        ) {
          availables.push(checkCell.name);
          break;
        } else {
          break;
        }
      }
    }
  }

  return availables;
}
