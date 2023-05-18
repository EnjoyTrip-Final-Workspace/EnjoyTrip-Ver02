<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12 col-md-6 offset-md-3">
        <b-card-group deck>
          <div class="row py-sm-2 py-md-4 py-lg-5">
            <template v-for="index in 6">
              <div class="col-sm-4" :key="`card1-${index}`">
                <b-card
                  :title="`Title: 1 - ${index}번`"
                  img-src="https://picsum.photos/300/300/?image=41"
                  img-alt="Image"
                  img-top
                  class="mb-4"
                >
                  <b-card-text>
                    화이팅!!!!!!!!!!!!!
                  </b-card-text>
                  <template #footer>
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </template>
                </b-card>
              </div>
            </template>
          </div>
        </b-card-group>
      </div>
    </div>
  </div>
</template>
