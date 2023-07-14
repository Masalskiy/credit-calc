/* функция добавления ведущих нулей */
    /* (если число меньше десяти, перед числом добавляем ноль) */
    function zero_first_format(value)
    {
        if (value < 10)
        {
            value='0'+value;
        }
        return value;
    }

    /* функция получения текущей даты и времени */
    function date_time()
    {
        var current_datetime = new Date();
        var day = zero_first_format(current_datetime.getDate());
        var month = zero_first_format(current_datetime.getMonth()+1);
        var year = current_datetime.getFullYear();
        //var hours = zero_first_format(current_datetime.getHours());
        //var minutes = zero_first_format(current_datetime.getMinutes());
        //var seconds = zero_first_format(current_datetime.getSeconds());
        return year + "-" + month + "-" + day;
    }
    /* выводим текущую дату и время на сайт в блок с id "date-calculation" */
    
    //document.getElementById('date-calculation').innerHTML = date_time();
    document.getElementById('date-calculation').value = date_time();