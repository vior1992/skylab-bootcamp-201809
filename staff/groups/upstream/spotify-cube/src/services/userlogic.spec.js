require('isomorphic-fetch')

const { expect } = require('chai')

const logic = require('./userlogic')

describe('userlogic', () => {
    true && describe('registerUser', () => {
        
        it('should succeed on registering user', () =>
            logic.registerUser('pp', 'pp', 'pp@pp.com', `${Math.random()}`, 'pp')
                .then((res) => expect(res.status).to.equal('OK'))
        )

        !true && it('should fail on trying to register twice same user', () => {
            const username = `jd-${Math.random()}`

            return logic.registerUser('John', 'Doe', username, '123')
                .then(() => logic.registerUser('John', 'Doe', username, '123'))
                .catch(err => {
                    expect(err).not.to.be.undefined
                    expect(err.message).to.equal(`user with username "${username}" already exists`)
                })
        })

        !true && it('should fail on undefined name', () => {
            expect(() =>
                logic.registerUser(undefined, 'Doe', 'jd', '123')
            ).to.throw(TypeError, 'undefined is not a string')
        })


    })
})