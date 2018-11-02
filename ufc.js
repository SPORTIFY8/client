$( document ).ready(function() {
    console.log('document ready')
    $('#list').empty()
    $('#list').append(`
    <div class="col-md-12">
        <img class="rounded mb-5" src="ufchomepage.jpeg">
    </div>
    `)
});

function getChampions(){
    $('#buttonN').attr('class','btn btn-dark')
    $('#buttonE').attr('class','btn btn-dark')
    $('#buttonC').attr('class','btn btn-danger')
    console.log('get champions')
    $('#list').empty()
    $('#list').append(`
    <div class="col-md-12">
        <img src="https://media1.tenor.com/images/db85ba00c6073b451a8f05156a66524e/tenor.gif?itemid=9856796">
    </div>
    `)

    $.ajax({
        method : 'GET',
        url : `http://ufc-data-api.ufc.com/api/v3/us/fighters/title_holders`
    })
    .done(response=>{
        $('#list').empty()
        // console.log(response[0])
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
            
                <div class="card mb-5" style="width: 18rem;" onclick="getFighter('${response[i].id}')" style="cursor:pointer;">
                    <div class="card-header bg-dark text-white">
                        <strong>${response[i].weight_class}</strong>
                    </div>
                    <div class="view overlay" style="cursor:pointer">
                        <img class="card-img-top mt-2" src="${response[i].profile_image}" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title bg-light">${response[i].first_name} ${response[i].last_name}</h5>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item bg-light"><b>Wins :</b> ${response[i].wins}</li>
                                <li class="list-group-item bg-light"><b>Loss :</b> ${response[i].losses}</li>
                                <li class="list-group-item bg-light"><b>Draw :</b> ${response[i].draws}</li>
                            </ul>
                        </div>
                        <div class="mask flex-center rgba-red-light">

                        </div>
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
    $('#list').empty()
    $('#list').append(`
    <div class="col-md-12">
        <img src="https://media1.tenor.com/images/db85ba00c6073b451a8f05156a66524e/tenor.gif?itemid=9856796">
    </div>
    `)

    $.ajax({
        method : 'GET',
        url : `http://ufc-data-api.ufc.com/api/v3/us/news`
    })
    .done(response=>{
        // console.log(response.slice(0,12))
        // console.log(response[0])
        let sorted = response.slice(0,12)
        console.log(sorted[0])
        $('#list').empty()

        for(let i = 0 ; i < sorted.length ; i ++){
            $('#list').append(`
            <div class="col ml-4">
                <div class="card mb-5" style="width: 18rem;height:300px" onclick="openNews(${sorted[i].id})" style="cursor:pointer;">
                    <div class="view overlay" style="height:300px;cursor:pointer;">

                        <img class="card-img-top" src="${sorted[i].thumbnail}" alt="Card image cap">
                        <div class="card-body">
                            <p class="card-text font-weight-bold">${sorted[i].title}</p>
                        </div>

                        <div class="mask flex-center rgba-red-light"></div>
                
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
    $('#list').empty()
    $('#list').append(`
    <div class="col-md-12">
        <img src="https://media1.tenor.com/images/db85ba00c6073b451a8f05156a66524e/tenor.gif?itemid=9856796">
    </div>
    `)

    $.ajax({
        method : 'GET',
        url : `http://ufc-data-api.ufc.com/api/v3/us/events`
    })
    .done(response=>{
        // console.log(response.slice(0,12))
        let sorted = response.slice(0,12)
        console.log(sorted[0])
        $('#list').empty()
        for(let i = 0 ; i < sorted.length ; i ++){
            // console.log(sorted[i])
            $('#list').append(`
            <div class="col ml-4">
                <div class="card mb-5" style="width: 20rem;height:700px">
                    <div class="card-header bg-dark text-white">
                        <strong>${sorted[i].base_title}</strong>
                    </div>
                    <img class="card-img-top" src="${sorted[i].secondary_feature_image}" alt="Card image cap" style="height:300px">
                    <div class="card-body bg-dark text-center">
                        <h5 class="card-title bg-warning rounded"><strong>${sorted[i].title_tag_line}</strong></h5>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item bg-light"><b>Arena :</b> ${sorted[i].arena}</li>
                            <li class="list-group-item bg-light"><b>Location :</b> ${sorted[i].location}</li>
                            <li class="list-group-item bg-light"><b>Date :</b> ${sorted[i].event_date.slice(0,10)}</li>
                        </ul>
                    </div>
                    <div class="card-footer bg-dark">
                        <p class="bg-warning rounded">${sorted[i].subtitle}</p>
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

function getFighter(id){
    // console.log(id)
    $('#list').empty()
    $('#list').append(`
    <div class="col-md-12">
        <img src="https://media1.tenor.com/images/db85ba00c6073b451a8f05156a66524e/tenor.gif?itemid=9856796">
    </div>
    `)

    $.ajax({
        method : 'GET',
        url : `http://ufc-data-api.ufc.com/api/v3/us/fighters/${id}.json`
    })
    .done(response=>{
        // console.log(response)
        if(response.nickname === null){
            response.nickname = ''
        }
        $('#list').empty()
        $('#list').append(`
            <div class="col-md-6 mt-5">
                <img src="${response.left_full_body_image}">
            </div>
            <div class="col-md-6">
                <div class="card border border-dark" style="width: 25rem;">
                <div class="card-header bg-dark text-white">
                    <h3>${response.first_name} ${response.last_name}</h3>
                </div>
                <div class="card-header bg-warning text-dark">
                    <i><h4>${response.nickname}</h4></i>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><b>Wins : </b>${response.wins}</li>
                    <li class="list-group-item"><b>Weight (kg) : </b>${response.weight_kg}</li>
                    <li class="list-group-item"><b>Weight Class : </b>${response.weight_class}</li>
                    <li class="list-group-item"><b>Strengths : </b>${response.strengths}</li>
                    <li class="list-group-item"><b>Striking Accuracy : </b>${response.StrikingAccuracy}</li>
                    <li class="list-group-item"><b>Striking Defense : </b>${response.StrikingDefense}</li>
                    <li class="list-group-item"><b>Submissions Average : </b>${response.SubmissionsAverage}</li>
                    <li class="list-group-item"><b>Takedown Accuracy : </b>${response.TakedownAccuracy}</li>
                    <li class="list-group-item"><b>Takedown Average : </b>${response.TakedownAverage}</li>
                    <li class="list-group-item"><b>Takedown Defense : </b>${response.TakedownDefense}</li>
                </ul>
                </div>
            </div>
        `)
    })
    .fail(error=>{
        console.log(error)
    })
}

function openNews(id){
    var win = window.open(`http://ufc-data-api.ufc.com/api/v3/us/news/${id}`);
    if (win) {
        //Browser has allowed it to be opened
        win.focus();
    } else {
        //Browser has blocked it
        alert('Please allow popups for this website');
    }
}