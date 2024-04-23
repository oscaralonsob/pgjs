
class CalculateMinimalGraphCommand {
    graph = [];
    constructor(graph) {
        this.graph = graph;
    }

    static create(graph) {
        return new CalculateMinimalGraphCommand(graph);
    }
}

export default CalculateMinimalGraphCommand;