RegisterCommand('show-ui', function ()
    SetNuiFocus(true, true)
    SendNUIMessage({
        action = 'open'
    })
end, false)

RegisterNUICallback('hide', function (data, cb)
    SetNuiFocus(false, false)
end)