describe('POST MOdule', function () {
    it('GET pets', function () {

        cy.request({
            method: 'GET',
            url: 'https://petstore.swagger.io/v2/pet/findByStatus',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            qs: {
                status: 'available'
            }


        }).then((response) => {
            expect(response.status).to.be.eq(200);
            expect(response.body.length).to.be.greaterThan(0);
            const firstPost = response.body[0];
            expect(firstPost).to.have.property('status', 'available');
        })
    });

    it('POST a New Pet', function () {
        cy.fixture('petDataApi').then((postBody) => {
            cy.request({
                method: 'POST',
                url: 'https://petstore.swagger.io/v2/pet',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: postBody


            }).then((response) => {

                expect(response.status).to.be.eq(200);
                expect(response.body.name).to.be.eq('Gandalf_Gray');
                expect(response.body).to.have.all.keys('id', 'category', 'name', 'photoUrls', 'tags', 'status');
            })
        });
    });

    it('UPDATE a  Post', function () {
        cy.fixture('petUpdateDataApi').then((postUpdatedBody) => {
            let petId;
            cy.request({
                method: 'PUT',
                url: 'https://petstore.swagger.io/v2/pet',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: postUpdatedBody
            }).then((response) => {
                expect(response.status).to.be.eq(200);
                expect(response.body.name).to.be.eq('Gandalf_THE_Gray');
                expect(response.body).to.have.all.keys('id', 'category', 'name', 'photoUrls', 'tags', 'status');
                petId = response.body.id
                cy.log(petId);
            });

        });
    });

    it('DELETE a  Post', function () {
        cy.request({
            method: 'DELETE',
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((response) => {
            expect(response.status).to.be.eq(200);
            expect(response.body).to.be.empty;
        })
    });

    // it('DELETE Pet Entry', function () {
    //     cy.request({
    //         method: 'DELETE',
    //         url: 'https://petstore.swagger.io/v2/pet/8',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //     }).then((response) => {
    //         expect(response.status).to.be.eq(200);
    //         expect(response.body).to.have.all.keys('code', 'type', 'message');
    //     })
    // });

});


