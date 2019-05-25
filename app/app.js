import "./klondike/scoring";
import "./klondike/klondike";
import "./klondike/board";
import "./klondike/game";

Promise.resolve(1)
angular.module("solitaire", ["klondike", "ngDraggable"]);
