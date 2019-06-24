
export default {
    template: `<section class="email-details">
                    <div class="email-details-header">
                        <div class="email-subject flex space-between align-center">
                            <div class="flex align-center">
                                <button @click.stop="emitFavorite"><i :class="this.isFavorite"  class="fas fa-star" ></i></button>
                                <h2 class="bold-text">{{this.email.subject}}</h2>
                            </div>
                            <div class="flex align-center">
                                <div>
                                    <button disabled><i :class="this.isRead" ></i></button>
                                    <button @click.stop="emitEmailDelete"><i class="fas fa-trash"></i></button>
                                </div>
                            </div>
                        </div>
                        <div class="email-from-details flex space-between">
                            <div class="from-address flex align-center">
                                <img :src="this.avatarSrc" alt=""/>
                                <p>{{this.email.from}}</p>
                            </div>
                            <div class="details-date flex align-center">{{this.formatDate}}</div>
                        </div>
                    </div>
                    <div class="email-details-body">
                        <p>{{this.email.body}}</p>
                    </div>
                    <div class="email-details-footer">
                        <button @click="emitCloseDetails" class="filter-btn">close</button>
                    </div>
              </section>
    `,
    props: ['email','formatDate','avatarSrc','isRead','isFavorite'],
    methods: {
        emitCloseDetails() {
            this.$emit('close-details')
        },
        emitEmailDelete() {
            this.$emit('delete-email');
            this.emitCloseDetails();
        },
        emitFavorite(){
            this.$emit('favorite-email');
        }
    }
}