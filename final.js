var myMaze = [
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [0, 1, 1, 0, 0, 0, 1, 1, 0, 0 ],
    [0, 0, 1, 1, 0, 0, 1, 0, 0, 0 ],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 0 ],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0 ],
    [0, 0, 1, 1, 1, 1, 0, 0, 1, 1 ],
    [1, 1, 1, 0, 0, 1, 0, 0, 0, 1 ],
    [0, 0, 1, 0, 0, 1, 1, 1, 1, 1 ],
    [0, 0, 1, 1, 1, 0, 0, 0, 0, 0 ],
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 1 ],
    
];


function MazeSolver(maze) {

    this.maze = maze;

    this.traverse = function(column, row) {
        if(this.maze[column][row] == 2) {
            console.log(" solved  (" + column + ", " + row + ")");
        } else if(this.maze[column][row] == 1) {
            console.log("valid  (" + column + ", " + row + ")");
            this.maze[column][row] = 10;
            if(column < this.maze.length - 1) {
                this.traverse(column + 1, row);
            }
            if(row < this.maze[column].length - 1) {
                this.traverse(column, row + 1);
            }
            if(column > 0) {
                this.traverse(column - 1, row);
            }
            if(row > 0) {
                this.traverse(column, row - 1);
            }
        }
    };

};