<template>
   <div class="heading">
      <div class="container">
        <div class="header">
          <h2>
            <span>
              {{title1}}
            </span>
           {{title2}}
          </h2>
        </div>
        <div class="sperator">
          <div class="content">
          <hr class="hr1">
          <span>
            O
          </span>
             <hr class="hr2">
            </div>
        </div>

        <div class="title">
          <p>
            World's leading tour and travels Booking website,Over 30,000 packages worldwide.
          </p>
        </div>

      </div>
    </div>
</template>
<script>
export default {
props:[
    "title1",
    "title2"
]
}
</script>
<style>
</style>