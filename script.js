
$(document).ready(function() {
    
    $("#cadastrar").click(function() {
    var tarefa = $("#tarefa").val();
    if (tarefa) {
        $("#tarefas").append("<li>" + tarefa + "</li>");
        $("#tarefa").val("");
    }
    });

    
    $("#tarefas li").click(function() {
    $(this).css("text-decoration", "line-through");
    });

    
});
