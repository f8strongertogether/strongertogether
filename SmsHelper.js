/**
 * The apk signature generated hash value
 * reference: https://developers.google.com/android/reference/com/google/android/gms/auth/api/phone/package-summary
 * @type {string}
 */
const appKey = 'Dt6yj3YDe6i';
const messageHeader = '<#>';


const smsHelper = {

    /**
     * This function expect the sms message to be in the following format:
     * <#>
     * latitude|longitude
     * appKey
     * @param content
     */
    parse: function(content) {

        const cleanContent = content.replace(messageHeader, '')
            .replace(appKey, '');

        const latlong = cleanContent.split('@');

        return {latitude: latlong[0], longitude: latlong[1]}

    }


}


export default smsHelper