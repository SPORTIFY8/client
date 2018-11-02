$( document ).ready(function() {
    console.log('document ready')
});

function getChampions(){
    $('#buttonN').attr('class','btn btn-dark')
    $('#buttonE').attr('class','btn btn-dark')
    $('#buttonC').attr('class','btn btn-danger')
    console.log('get champions')

    $.ajax({
        method : 'GET',
        url : `http://ufc-data-api.ufc.com/api/v3/us/fighters/title_holders`
    })
    .done(response=>{
        $('#list').empty()
        for(let i = 0 ; i < response.length ; i ++){
            if(response[i].last_name === null){
                response[i].last_name = ''
            }

            for(let j = 0 ; j < response[i].weight_class ; j++){
                if(response[i].weight_class[j] === '_'){
                    response[i].weight_class[j] === ' '
                }
            }

            $('#list').append(`
            <div class="col ml-4">
                <div class="card" style="width: 18rem;">
                    <div class="card-header bg-dark text-white">
                        <strong>${response[i].weight_class}</strong>
                    </div>
                    <img class="card-img-top mt-2" src="${response[i].profile_image}" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title bg-light">${response[i].first_name} ${response[i].last_name}</h5>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item bg-light"><b>Wins :</b> ${response[i].wins}</li>
                            <li class="list-group-item bg-light"><b>Loss :</b> ${response[i].losses}</li>
                            <li class="list-group-item bg-light"><b>Draw :</b> ${response[i].draws}</li>
                        </ul>
                    </div>
                </div>
            </div>
            `)
        }
    })
    .fail(error=>{
        console.log(error)
    })
}

function getNews(){
    $('#buttonN').attr('class','btn btn-danger')
    $('#buttonE').attr('class','btn btn-dark')
    $('#buttonC').attr('class','btn btn-dark')
    console.log('get news')

    $.ajax({
        method : 'GET',
        url : `http://ufc-data-api.ufc.com/api/v3/us/news`
    })
    .done(response=>{
        // console.log(response.slice(0,12))
        // console.log(response[0])
        let sorted = response.slice(0,12)
        $('#list').empty()

        for(let i = 0 ; i < sorted.length ; i ++){
            $('#list').append(`
            <div class="col ml-4">
                <div class="card mb-5" style="width: 18rem;height:300px">
                    <img class="card-img-top" src="${sorted[i].thumbnail}" alt="Card image cap">
                    <div class="card-body">
                        <p class="card-text font-weight-bold">${sorted[i].title}</p>
                    </div>
                </div>
            </div>
            `)
        }
    })
    .fail(error=>{
        console.log(error)
    })
}

function getEvents(){
    $('#buttonN').attr('class','btn btn-dark')
    $('#buttonE').attr('class','btn btn-danger')
    $('#buttonC').attr('class','btn btn-dark')
    console.log('get events')

    $.ajax({
        method : 'GET',
        url : `http://ufc-data-api.ufc.com/api/v3/us/events`
    })
    .done(response=>{
        console.log(response.slice(0,12))
        let sorted = response.slice(0,12)
        $('#list').empty()
        for(let i = 0 ; i < sorted.length ; i ++){
            console.log(sorted[i])
            $('#list').append(`
            <div class="col ml-4">
                <div class="card mb-3" style="width: 18rem;height:600px">
                    <div class="card-header bg-dark text-white">
                        <strong>${sorted[i].base_title}</strong>
                    </div>
                    <img class="card-img-top" src="${sorted[i].feature_image}" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title bg-light">${sorted[i].title_tag_line}</h5>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item bg-light"><b>Arena :</b> ${sorted[i].arena}</li>
                            <li class="list-group-item bg-light"><b>Location :</b> ${sorted[i].location}</li>
                            <li class="list-group-item bg-light"><b>Date :</b> ${sorted[i].event_date.slice(0,10)}</li>
                        </ul>
                    </div>
                </div>
            </div>
            `)
        }


    })
    .fail(error=>{
        console.log(error)
    })
}